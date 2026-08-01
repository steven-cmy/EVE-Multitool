import { axiosInstance, baseDomain } from './base';

const endpoint = `https://market.${baseDomain}/aggregates/`;

interface RawFuzzworkMarketStat {
  weightedAverage: string;
  max: string;
  min: string;
  stddev: string;
  median: string;
  volume: string;
  orderCount: string;
  percentile: string;
}

interface RawFuzzworkMarketAggregates {
  buy: RawFuzzworkMarketStat;
  sell: RawFuzzworkMarketStat;
}

type RawFuzzworkMarketAggregatesResponse = Record<string, RawFuzzworkMarketAggregates>;

interface FuzzworkMarketStat {
  weightedAverage: number;
  max: number;
  min: number;
  stddev: number;
  median: number;
  volume: number;
  orderCount: number;
  percentile: number;
}

interface FuzzworkMarketAggregates {
  buy: FuzzworkMarketStat;
  sell: FuzzworkMarketStat;
}

const parseMarketStat = (stat: RawFuzzworkMarketStat): FuzzworkMarketStat => ({
  weightedAverage: Number(stat.weightedAverage),
  max: Number(stat.max),
  min: Number(stat.min),
  stddev: Number(stat.stddev),
  median: Number(stat.median),
  volume: Number(stat.volume),
  orderCount: Number(stat.orderCount),
  percentile: Number(stat.percentile),
});

const parseAggregates = (
  raw: RawFuzzworkMarketAggregatesResponse,
): Record<string, FuzzworkMarketAggregates> =>
  Object.entries(raw).reduce<Record<string, FuzzworkMarketAggregates>>((result, [typeId, data]) => {
    result[typeId] = {
      buy: parseMarketStat(data.buy),
      sell: parseMarketStat(data.sell),
    };
    return result;
  }, {});

export const aggregates = async (
  typeIds: number[],
  regionLimit?: number,
): Promise<Record<string, FuzzworkMarketAggregates>> => {
  if (typeIds.length === 0) {
    throw new Error('At least one typeId is required to fetch aggregates.');
  }

  const query = `${
    regionLimit !== undefined ? `regionlimit=${regionLimit}` : ''
  }&types=${typeIds.join(',')}`;

  try {
    const response = await axiosInstance.get<RawFuzzworkMarketAggregatesResponse>(
      `${endpoint}?${query}`,
    );

    return parseAggregates(response.data);
  } catch (error) {
    console.error('Failed to fetch Fuzzwork market aggregates:', error);
    throw error;
  }
};

export const aggregate = async (
  typeId: number,
  regionLimit?: number,
): Promise<FuzzworkMarketAggregates | undefined> => {
  const response = await aggregates([typeId], regionLimit);
  return response[String(typeId)];
};
