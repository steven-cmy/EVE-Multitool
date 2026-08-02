<template>
  <n-data-table
    :single-line="false"
    :columns="columns"
    :data="gases.filter((row) => showUnpublish || row.published)"
    @update:filters="handleUpdateFilter"
  />
</template>

<script setup lang="ts">
import { axiosInstance } from '@/api/esi';
import { getPrice, type ESIMarketStat } from '@/api/esi/market';
// import { aggregates } from '@/api/fuzzwork/market';
import i18n from '@/i18n';
import { useLanguageStore } from '@/stores/LanguageStore.ts';
import {
  Configuration,
  GetUniverseGroupsGroupIdAcceptLanguageEnum,
  GetUniverseTypesTypeIdAcceptLanguageEnum,
  GetUniverseTypesTypeIdXCompatibilityDateEnum,
  MarketApi,
  UniverseApi,
} from 'eve-esi-client-ts';
import type { DataTableBaseColumn, DataTableColumns, DataTableFilterState } from 'naive-ui';
import { onMounted, reactive, ref, watch } from 'vue';

const {
  regionId,
  // systemId,
  // locationId
} = defineProps({
  regionId: {
    type: Number,
    required: true,
  },
  // systemId: {
  //   type: Number,
  // },
  // locationId: {
  //   type: Number,
  // },
});

const universeApi = new UniverseApi(new Configuration(), undefined, axiosInstance);
const marketApi = new MarketApi(new Configuration(), undefined, axiosInstance);
const xCompatibilityDate = GetUniverseTypesTypeIdXCompatibilityDateEnum._20260721;
const xTenant = 'tranquility';
const langStore = useLanguageStore();

const gasCloudGroup = 711;
const showUnpublish = ref<boolean>(false);
const gasIds = ref<number[]>();
const gases = ref<Gas[]>([]);
const marketGroups = new Set<number>();

const refreshGasPrice = async (
  gasIds: number[],
  locale: GetUniverseTypesTypeIdAcceptLanguageEnum,
) => {
  const gasData = await Promise.all(
    gasIds.map(async (typeId) => {
      const data = await universeApi
        .getUniverseTypesTypeId(
          typeId,
          xCompatibilityDate,
          locale as GetUniverseTypesTypeIdAcceptLanguageEnum,
          undefined,
          xTenant,
          undefined,
        )
        .catch((err) => {
          console.error('ESI API call failed:', err.message);
        })
        .then((response) => response?.data);
      return data;
    }),
  );
  // const priceData = await aggregates(gasIds, locationId ?? systemId ?? regionId).catch(() => null);
  const priceDataEntries = await Promise.all(
    gasIds.map(
      async (typeId) =>
        [
          typeId,
          await getPrice(regionId, typeId, 'all', langStore.getShortLocale()).catch(() => null),
        ] as const,
    ),
  );
  const priceData = Object.fromEntries(priceDataEntries) as Record<number, ESIMarketStat>;
  gases.value = await Promise.all(
    gasData.map(async (data) => {
      const typeId = data?.type_id ?? 0;
      const volume = data?.volume ?? 0;
      const marketGroup = data?.market_group_id ?? 0;
      if (marketGroup > 0) marketGroups.add(marketGroup);

      const unitPrice = priceData[typeId]?.buy.percentile ?? 0;

      return {
        typeId,
        marketGroup,
        name: data?.name || '',
        volume,
        published: data?.published || false,
        unitPrice,
        pricePerVolume: volume > 0 ? unitPrice / volume : 0,
      };
    }),
  );
  await updateGasFilterOptions();
};

onMounted(async () => {
  const response = await universeApi
    .getUniverseGroupsGroupId(
      gasCloudGroup,
      xCompatibilityDate,
      langStore.getShortLocale() as GetUniverseGroupsGroupIdAcceptLanguageEnum,
      undefined,
      xTenant,
      undefined,
    )
    .catch((err) => {
      console.error('ESI API call failed:', err.message);
    })
    .then((response) => response?.data);
  gasIds.value = response?.types || [];
});

watch(
  [gasIds, () => langStore.getShortLocale()],
  async ([, newLocale]) => {
    if (gasIds.value && newLocale) {
      await refreshGasPrice(gasIds.value, newLocale as GetUniverseTypesTypeIdAcceptLanguageEnum);
    }
  },
  { immediate: true },
);

interface Gas {
  typeId: number;
  marketGroup: number;
  name: string;
  volume: number;
  published: boolean;
  unitPrice: number;
  pricePerVolume: number;
}

const gasColumn = reactive<DataTableBaseColumn<Gas>>({
  title: () => i18n.global.t('harvest.gas.gasType'),
  key: 'name',
  filterMultiple: false,
  filterOptionValue: null,
  filterOptions: [],
  sorter: 'default',
  filter(value, row) {
    return value === row.marketGroup;
  },
});

const updateGasFilterOptions = async () => {
  const options = await Promise.all(
    Array.from(marketGroups).map(async (marketGroupId: number) => {
      const response = await marketApi
        .getMarketsGroupsMarketGroupId(
          marketGroupId,
          xCompatibilityDate,
          langStore.getShortLocale() as GetUniverseGroupsGroupIdAcceptLanguageEnum,
          undefined,
          xTenant,
          undefined,
        )
        .catch((err) => {
          console.error('ESI API call failed:', err.message);
        })
        .then((response) => response?.data);
      return { label: response?.name ?? '', value: response?.market_group_id ?? 0 };
    }),
  );

  gasColumn.filterOptions = options;
};

const columns = reactive<DataTableColumns<Gas>>([
  gasColumn,
  {
    title: () => i18n.global.t('harvest.gas.unitPrice'),
    key: 'unitPrice',
    sorter: (row1, row2) => row1.unitPrice - row2.unitPrice,
    className: 'ISK',
    render(row) {
      return row.unitPrice.toFixed(2);
    },
  },
  {
    title: () => i18n.global.t('harvest.gas.volume'),
    key: 'volume',
    sorter: (row1, row2) => row1.volume - row2.volume,
    className: 'volume',
  },
  {
    title: () => i18n.global.t('harvest.gas.pricePerVolume'),
    key: 'pricePerVolume',
    sorter: (row1, row2) => row1.pricePerVolume - row2.pricePerVolume,
    className: 'ISK',
    render(row) {
      return row.pricePerVolume.toFixed(2);
    },
  },
]);

function handleUpdateFilter(filters: DataTableFilterState, sourceColumn: DataTableBaseColumn) {
  gasColumn.filterOptionValue = filters[sourceColumn.key] as string;
}
</script>

<style lang="css">
td.volume::after {
  content: ' m³';
}
td.volume {
  text-align: end !important;
}
td.ISK::before {
  content: 'ISK';
  margin-right: 0.25rem;
}
td.ISK {
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  position: relative;
}
</style>
