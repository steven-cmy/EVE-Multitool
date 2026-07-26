import { endpoint, axiosInstance } from './base';

export interface MarketStat {
  buyVolume: number;
  sellVolume: number;
  buyOrders: number;
  sellOrders: number;
  buyOutliers: number;
  sellOutliers: number;
  buyThreshold: number;
  sellThreshold: number;
  buyAvgFivePercent: number;
  sellAvgFivePercent: number;
}

export const stats = async (
  regionId: number,
  typeId: number,
  systemId?: number,
  locationId?: number,
): Promise<MarketStat> => {
  const params: Record<string, number> = {};
  if (systemId !== undefined) params.systemId = systemId;
  if (locationId !== undefined) params.locationId = locationId;

  try {
    const response = await axiosInstance.get(`${endpoint}/market/stats/${regionId}/${typeId}`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch stats:', error);
    throw error;
  }
};

interface ItemType {
  typeID: number;
  groupID: number;
  typeName: string;
  iconID: number;
  marketGroupID: number;
  description: string;
  published: boolean;
}

interface System {
  solarSystemID: number;
  solarSystemName: string;
  security: number;
}

interface MarketOrder {
  duration: number;
  isBuyOrder: boolean;
  issued: number; // Timestamp
  locationId: number;
  minVolume: number;
  orderId: number;
  price: number;
  range: string;
  systemId: number;
  regionId: number;
  typeId: number;
  volumeRemain: number;
  volumeTotal: number;
}

export interface MarketOrders {
  itemType: ItemType;
  /** Dictionary mapping solarSystemID string to its info */
  systems: Record<string, System>;
  /** Dictionary mapping stationID string to its name */
  stationNames: Record<string, string>;
  /** Dictionary mapping structureID string to its name */
  structureNames: Record<string, string>;
  orders: MarketOrder[];
}

export const orders = async (
  typeId: number,
  regionId?: number,
  systemId?: number,
  locationId?: number,
): Promise<MarketOrders> => {
  const params: Record<string, number> = {};

  if (regionId !== undefined) params.regionId = regionId;
  if (systemId !== undefined) params.systemId = systemId;
  if (locationId !== undefined) params.locationId = locationId;

  try {
    const response = await axiosInstance.get(`${endpoint}/market/orders/${typeId}`, { params });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch orders:', error);
    throw error;
  }
};

export interface MarketHistoryEntry {
  date: number; // Timestamp
  regionId: number;
  typeId: number;
  average: number;
  highest: number;
  lowest: number;
  orderCount: number;
  volume: number;
}

export type MarketHistory = MarketHistoryEntry[];

export const history = async (regionId: number, typeId: number): Promise<MarketHistory> => {
  try {
    const response = await axiosInstance.get(`${endpoint}/market/history/${regionId}/${typeId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch history:', error);
    throw error;
  }
};
