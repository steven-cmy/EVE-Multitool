<script setup lang="ts">
import { reactive, ref, watch, toRefs } from 'vue';
import { NSkeleton, NBreadcrumb, NBreadcrumbItem, NPopover, NIcon } from 'naive-ui';
import {
  Configuration,
  GetMarketsGroupsMarketGroupIdAcceptLanguageEnum,
  GetMarketsGroupsMarketGroupIdDatasourceEnum,
  GetMarketsGroupsMarketGroupIdLanguageEnum,
  type GetMarketsGroupsMarketGroupIdOk,
  GetUniverseCategoriesCategoryIdAcceptLanguageEnum,
  GetUniverseCategoriesCategoryIdLanguageEnum,
  type GetUniverseCategoriesCategoryIdOk,
  type GetUniverseGroupsGroupIdOk,
  type GetUniverseTypesTypeIdOk,
  MarketApi,
  UniverseApi,
} from 'eve-esi-client-ts';
import { axiosInstance, call } from '@/api/esi';
import { useLanguageStore } from '@/stores/LanguageStore';
import { Eye, EyeOff } from '@vicons/tabler';

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
const group = ref<GetUniverseGroupsGroupIdOk>();
const category = ref<GetUniverseCategoriesCategoryIdOk>();
const mApi = new MarketApi(new Configuration(), undefined, axiosInstance);
const uApi = new UniverseApi(new Configuration(), undefined, axiosInstance);

watch(
  [type.value, () => langStore.getShortLocale()],
  async ([newType, newLocale]) => {
    loading.value = true;
    const datasource = 'tranquility';
    if (newType.market_group_id) {
      if (newType.market_group_id) {
        groups.length = 0;
        const fetchGroupHierarchy = async (groupId: number): Promise<void> => {
          const data = await call(
            mApi.getMarketsGroupsMarketGroupId(
              groupId,
              newLocale as GetMarketsGroupsMarketGroupIdAcceptLanguageEnum,
              datasource as GetMarketsGroupsMarketGroupIdDatasourceEnum,
              undefined,
              newLocale as GetMarketsGroupsMarketGroupIdLanguageEnum,
            ),
          );

          groups.unshift(data);

          if (data.parent_group_id) {
            await fetchGroupHierarchy(data.parent_group_id);
          }
        };

        await fetchGroupHierarchy(newType.market_group_id);
      }

      group.value = await call(
        uApi.getUniverseGroupsGroupId(
          newType.group_id,
          newLocale as GetMarketsGroupsMarketGroupIdAcceptLanguageEnum,
          datasource as GetMarketsGroupsMarketGroupIdDatasourceEnum,
          undefined,
          newLocale as GetMarketsGroupsMarketGroupIdLanguageEnum,
        ),
      );
      category.value = await call(
        uApi.getUniverseCategoriesCategoryId(
          group.value.category_id,
          newLocale as GetUniverseCategoriesCategoryIdAcceptLanguageEnum,
          datasource as GetMarketsGroupsMarketGroupIdDatasourceEnum,
          undefined,
          newLocale as GetUniverseCategoriesCategoryIdLanguageEnum,
        ),
      );

      loading.value = groups.length === 0;
    }
  },
  { immediate: true },
);
</script>
<template>
  <n-flex justify="space-between">
    <n-skeleton v-if="loading" text style="width: 30%"></n-skeleton>
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
      <n-breadcrumb-item separator="<">{{ type.name }}</n-breadcrumb-item>
      <n-breadcrumb-item v-if="category" separator="<">
        <n-icon v-if="category.published" :component="Eye" /><n-icon v-else :component="EyeOff" />
        {{ category.name }}
      </n-breadcrumb-item>
      <n-breadcrumb-item v-if="group" separator="<">
        <n-icon v-if="group.published" :component="Eye" /><n-icon v-else :component="EyeOff" />
        {{ group.name }}
      </n-breadcrumb-item>
      <n-breadcrumb-item separator="<">
        <RouterLink to="#">{{ $t('types.catagory') }}</RouterLink>
      </n-breadcrumb-item>
    </n-breadcrumb>
  </n-flex>
</template>
