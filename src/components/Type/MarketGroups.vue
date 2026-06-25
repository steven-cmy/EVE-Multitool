<script setup lang="ts">
import { reactive, ref, watch, toRefs } from 'vue';
import { NSkeleton, NBreadcrumb, NBreadcrumbItem, NPopover } from 'naive-ui';
import {
  Configuration,
  GetMarketsGroupsMarketGroupIdAcceptLanguageEnum,
  type MarketsGroupsMarketGroupIdGet,
  GetMarketsGroupsMarketGroupIdXCompatibilityDateEnum,
  type UniverseTypesTypeIdGet,
  MarketApi,
} from 'eve-esi-client-ts';
import { axiosInstance } from '@/api/esi';
import { useLanguageStore } from '@/stores/LanguageStore';

const xCompatibilityDate = GetMarketsGroupsMarketGroupIdXCompatibilityDateEnum._20260609;
const xTenant = 'tranquility';
const langStore = useLanguageStore();
const loading = ref(true);
const props = defineProps({
  type: {
    type: Object as () => UniverseTypesTypeIdGet,
    default: {} as UniverseTypesTypeIdGet,
  },
});
const { type } = toRefs(props);
const groups = reactive<MarketsGroupsMarketGroupIdGet[]>([]);
const api = new MarketApi(new Configuration(), undefined, axiosInstance);

watch(
  [()=>type.value.market_group_id, () => langStore.getShortLocale()],
  async ([newId, newLocale]) => {
    loading.value = true;
    if (newId) {
      if (newId) {
        groups.length = 0;
        const fetchGroupHierarchy = async (groupId: number): Promise<void> => {
          const data = await api
            .getMarketsGroupsMarketGroupId(
              groupId,
              xCompatibilityDate,
              newLocale as GetMarketsGroupsMarketGroupIdAcceptLanguageEnum,
              undefined,
              xTenant,
              undefined,
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

        await fetchGroupHierarchy(newId);
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
