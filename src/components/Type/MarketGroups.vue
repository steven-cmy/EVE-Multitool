<script setup lang="ts">
import { reactive, ref, watch, toRefs } from 'vue';
import { NSkeleton, NBreadcrumb, NBreadcrumbItem, NPopover } from 'naive-ui';
import {
  Configuration,
  GetMarketsGroupsMarketGroupIdAcceptLanguageEnum,
  GetMarketsGroupsMarketGroupIdDatasourceEnum,
  GetMarketsGroupsMarketGroupIdLanguageEnum,
  type GetMarketsGroupsMarketGroupIdOk,
  type GetUniverseTypesTypeIdOk,
  MarketApi,
} from 'eve-esi-client-ts';
import { axiosInstance } from '@/api/esi';
import { useLanguageStore } from '@/stores/LanguageStore';

const langStore = useLanguageStore();
const loading = ref(true);
const props = defineProps({
  type: {
    type: Object as () => GetUniverseTypesTypeIdOk,
    default: {} as GetUniverseTypesTypeIdOk,
  },
});
const { type } = toRefs(props);
const groups = reactive<GetMarketsGroupsMarketGroupIdOk[]>([]);
const api = new MarketApi(new Configuration(), undefined, axiosInstance);

watch(
  [type.value, () => langStore.getShortLocale()],
  async ([newType, newLocale]) => {
    loading.value = true;
    const datasource = 'tranquility';
    if (newType.market_group_id) {
      if (newType.market_group_id) {
        groups.length = 0;
        const fetchGroupHierarchy = async (groupId: number): Promise<void> => {
          const data = await api
            .getMarketsGroupsMarketGroupId(
              groupId,
              newLocale as GetMarketsGroupsMarketGroupIdAcceptLanguageEnum,
              datasource as GetMarketsGroupsMarketGroupIdDatasourceEnum,
              undefined,
              newLocale as GetMarketsGroupsMarketGroupIdLanguageEnum,
            )
            .catch((err) => {
              console.error('ESI API call failed:', err.message);
              return null;
            })
            .then((response) => response?.data);

          if (data) groups.unshift(data);

          if (data?.parent_group_id) {
            await fetchGroupHierarchy(data.parent_group_id);
          }
        };

        await fetchGroupHierarchy(newType.market_group_id);
      }

      loading.value = groups.length === 0;
    }
  },
  { immediate: true },
);
</script>
<template>
  <div v-if="loading"><n-skeleton text style="width: 30%"></n-skeleton></div>
  <n-breadcrumb v-else separator=">">
    <n-breadcrumb-item>
      <RouterLink to="#">{{ $t('types.market') }}</RouterLink>
    </n-breadcrumb-item>
    <n-breadcrumb-item v-for="group in groups" v-bind:key="group.market_group_id">
      <n-popover :delay="1000" trigger="hover">
        <template #trigger>
          <RouterLink to="#">{{ group.name }}</RouterLink>
        </template>
        <span>{{ group.description }}</span>
      </n-popover>
    </n-breadcrumb-item>
    <n-breadcrumb-item>{{ type.name }}</n-breadcrumb-item>
  </n-breadcrumb>
</template>
