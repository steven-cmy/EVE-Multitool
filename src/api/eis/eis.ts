import axios from 'axios';

export const BASE_PATH = 'https://images.evetech.net';

export type CATEGORY = 'alliances' | 'characters' | 'corporations' | 'types';
export type ID = number;
export type VARIATION = string;
export type TENANT = 'tranquility' | 'singularity';

export interface IMAGE {
  category: CATEGORY;
  id: ID;
  variation?: VARIATION;
  size?: number;
  tenant?: TENANT;
}

const DEFAULT_TENANT: TENANT = 'tranquility';
const MIN_SIZE = 32;
const MAX_SIZE = 1024;

const isValidSize = (size: number): boolean => {
  return size >= MIN_SIZE && size <= MAX_SIZE && (size & (size - 1)) === 0;
};

const isValidId = (id: number): boolean => {
  return Number.isInteger(id) && id > 0;
};

export const getImageUrl = (image: IMAGE): string => {
  const { category, id, size, variation, tenant = DEFAULT_TENANT } = image;

  const variant = (() => {
    if (variation) return variation;
    switch (category) {
      case 'alliances':
        return 'logo';
      case 'characters':
        return 'portrait';
      case 'corporations':
        return 'logo';
      case 'types':
        return 'icon';
      default:
        return variation;
    }
  })();

  if (!isValidId(id)) {
    throw new Error(`Invalid ID: ${id}. ID must be a positive integer.`);
  }

  if (size && !isValidSize(size)) {
    throw new Error(
      `Invalid size: ${size}. Size must be a power of 2 between ${MIN_SIZE} and ${MAX_SIZE}.`,
    );
  }

  const base = `${BASE_PATH}/${category}/${id}`;
  const queryParams = [];

  if (size) {
    queryParams.push(`size=${size}`);
  }

  if (tenant !== DEFAULT_TENANT) {
    queryParams.push(`tenant=${tenant}`);
  }

  const query = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
  return variant ? `${base}/${variant}${query}` : `${base}${query}`;
};

export const getVariations = async (
  category: CATEGORY,
  id: ID,
  tenant: TENANT = DEFAULT_TENANT,
): Promise<string[]> => {
  if (!isValidId(id)) {
    throw new Error(`Invalid ID: ${id}. ID must be a positive integer.`);
  }

  const params = tenant !== DEFAULT_TENANT ? `?tenant=${tenant}` : '';
  try {
    const response = await axios.get(`${BASE_PATH}/${category}/${id}${params}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to fetch variations: ${error.message}`);
    }
    throw error;
  }
};
