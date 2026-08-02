import {
  Configuration,
  GetMarketsRegionIdOrdersAcceptLanguageEnum,
  GetMarketsRegionIdOrdersXCompatibilityDateEnum,
  MarketApi,
} from 'eve-esi-client-ts';
import { axiosInstance } from '../esi';
import Dexie from 'dexie';
import type { EntityTable } from 'dexie';

const marketApi = new MarketApi(new Configuration(), undefined, axiosInstance);
const xCompatibilityDate = GetMarketsRegionIdOrdersXCompatibilityDateEnum._20260721;

const percentilePercentage = 0.05; // 5%

export enum OrderType {
  All = 'all',
  Buy = 'buy',
  Sell = 'sell',
}

export interface ESIMarketStats {
  weightedAverage: number;
  max: number;
  min: number;
  stddev: number;
  median: number;
  volume: number;
  orderCount: number;
  percentile: number;
}

export interface ESIMarketStat {
  typeId: number;
  buy: ESIMarketStats;
  sell: ESIMarketStats;
  expires: number;
  pages?: number;
}

const db = new Dexie('EVEMultitool') as Dexie & {
  ESIMarket: EntityTable<ESIMarketStat, 'typeId'>;
};
db.version(1).stores({
  ESIMarket: 'typeId',
});
const cache = db.table('ESIMarket');

interface ESIMarketOrder {
  duration: number;
  is_buy_order: boolean;
  issued: string;
  location_id: number;
  min_volume: number;
  order_id: number;
  price: number;
  range: string;
  system_id: number;
  type_id: number;
  volume_remain: number;
  volume_total: number;
}

export async function updatePrice(
  regionId: number,
  orderType: OrderType = OrderType.All,
  page?: number,
  typeId?: number,
  acceptLanguage?: GetMarketsRegionIdOrdersAcceptLanguageEnum,
): Promise<boolean> {
  try {
    const response = await marketApi.getMarketsRegionIdOrders(
      orderType,
      regionId,
      xCompatibilityDate,
      page,
      typeId,
      acceptLanguage as GetMarketsRegionIdOrdersAcceptLanguageEnum,
    );
    const orders = response.data as ESIMarketOrder[];

    if (!orders?.length) {
      return false;
    }

    const pages = Number(response.headers['x-pages'] ?? response.headers['X-Pages'] ?? 1) || 1;

    const calculateStats = (
      ordersToCalculate: ESIMarketOrder[],
      orderSide: 'buy' | 'sell',
    ): ESIMarketStats => {
      const stats: ESIMarketStats = {
        weightedAverage: 0,
        max: 0,
        min: 0,
        stddev: 0,
        median: 0,
        volume: 0,
        orderCount: ordersToCalculate.length,
        percentile: 0,
      };

      if (!ordersToCalculate.length) {
        return stats;
      }

      const prices = ordersToCalculate.map((order) => order.price).sort((a, b) => a - b);
      const volume = ordersToCalculate.reduce((sum, order) => sum + order.volume_remain, 0);
      const weightedAverage = volume
        ? ordersToCalculate.reduce((sum, order) => sum + order.price * order.volume_remain, 0) /
          volume
        : 0;

      stats.weightedAverage = weightedAverage;
      stats.max = prices[prices.length - 1]!;
      stats.min = prices[0]!;
      stats.stddev = Math.sqrt(
        prices.reduce((sum, price) => sum + Math.pow(price - weightedAverage, 2), 0) /
          prices.length,
      );
      stats.median = prices[Math.floor(prices.length / 2)]!;
      stats.volume = volume;

      const percentileIndex =
        orderSide === 'buy'
          ? Math.min(
              prices.length - 1,
              Math.max(0, Math.ceil((prices.length - 1) * (1 - percentilePercentage))),
            )
          : Math.max(0, Math.floor((prices.length - 1) * percentilePercentage));
      stats.percentile = prices[percentileIndex]!;

      return stats;
    };

    const groups = orders.reduce((groupMap, order) => {
      const entry = groupMap.get(order.type_id) ?? {
        buy: [] as ESIMarketOrder[],
        sell: [] as ESIMarketOrder[],
      };
      if (order.is_buy_order) {
        entry.buy.push(order);
      } else {
        entry.sell.push(order);
      }
      groupMap.set(order.type_id, entry);
      return groupMap;
    }, new Map<number, { buy: ESIMarketOrder[]; sell: ESIMarketOrder[] }>());

    const promises = Array.from(groups.entries()).map(async ([typeId, groupedOrders]) => {
      const buy = calculateStats(groupedOrders.buy, 'buy');
      const sell = calculateStats(groupedOrders.sell, 'sell');
      await cache.put({
        typeId,
        buy,
        sell,
        pages,
        expires: Date.now() + 24 * 60 * 60 * 1000,
      });
    });

    await Promise.all(promises);

    return true;
  } catch (error) {
    console.error('updatePrice failed', error);
    return false;
  }
}

export async function getPrice(
  regionId: number,
  typeId: number,
  orderType: OrderType | string = OrderType.All,
  lang: string = 'en',
  retry: boolean = true,
): Promise<ESIMarketStat | undefined> {
  const cached = await cache.get(typeId);
  if (cached && cached.expires > Date.now()) {
    if (orderType === OrderType.Sell) {
      return cached.sell;
    } else if (orderType === OrderType.Buy) {
      return cached.buy;
    }
    return cached;
  }
  if (retry) {
    await updatePrice(
      regionId,
      orderType as OrderType,
      1,
      typeId,
      lang as GetMarketsRegionIdOrdersAcceptLanguageEnum,
    ).catch((error) => {
      console.error('updatePrice failed', error);
    });
    return getPrice(regionId, typeId, orderType, lang, !retry);
  }
  return undefined;
}
