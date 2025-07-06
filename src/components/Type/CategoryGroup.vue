<script setup lang="ts">
import { ref, watch, toRefs } from 'vue';
import { NSkeleton, NBreadcrumb, NBreadcrumbItem, NIcon } from 'naive-ui';
import {
  Configuration,
  GetUniverseCategoriesCategoryIdAcceptLanguageEnum,
  GetUniverseCategoriesCategoryIdDatasourceEnum,
  GetUniverseCategoriesCategoryIdLanguageEnum,
  type GetUniverseCategoriesCategoryIdOk,
  GetUniverseGroupsGroupIdAcceptLanguageEnum,
  GetUniverseGroupsGroupIdDatasourceEnum,
  GetUniverseGroupsGroupIdLanguageEnum,
  type GetUniverseGroupsGroupIdOk,
  type GetUniverseTypesTypeIdOk,
  UniverseApi,
} from 'eve-esi-client-ts';
import { axiosInstance } from '@/api/esi';
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
const group = ref<GetUniverseGroupsGroupIdOk>();
const category = ref<GetUniverseCategoriesCategoryIdOk>();
const api = new UniverseApi(new Configuration(), undefined, axiosInstance);

watch(
  [type.value, () => langStore.getShortLocale()],
  async ([newType, newLocale]) => {
    loading.value = true;
    const datasource = 'tranquility';

    if (newType.group_id) {
      group.value = await api
        .getUniverseGroupsGroupId(
          newType.group_id,
          newLocale as GetUniverseGroupsGroupIdAcceptLanguageEnum,
          datasource as GetUniverseGroupsGroupIdDatasourceEnum,
          undefined,
          newLocale as GetUniverseGroupsGroupIdLanguageEnum,
        )
        .catch((err) => {
          console.error('ESI API call failed:', err.message);
        })
        .then((response) => response?.data);
    }
    if (group.value?.category_id) {
      category.value = await api
        .getUniverseCategoriesCategoryId(
          group.value.category_id,
          newLocale as GetUniverseCategoriesCategoryIdAcceptLanguageEnum,
          datasource as GetUniverseCategoriesCategoryIdDatasourceEnum,
          undefined,
          newLocale as GetUniverseCategoriesCategoryIdLanguageEnum,
        )
        .catch((err) => {
          console.error('ESI API call failed:', err.message);
        })
        .then((response) => response?.data);
    }
    loading.value = !(group.value?.group_id || category.value?.category_id);
  },
  { immediate: true },
);
</script>
<template>
  <div v-if="loading"><n-skeleton text style="width: 30%"></n-skeleton></div>
  <n-breadcrumb v-else separator=">">
    <n-breadcrumb-item>
      <RouterLink to="#">{{ $t('types.catagory') }}</RouterLink>
    </n-breadcrumb-item>
    <n-breadcrumb-item v-if="category">
      <n-icon v-if="category.published" :component="Eye" /><n-icon v-else :component="EyeOff" />
      {{ category.name }}
    </n-breadcrumb-item>
    <n-breadcrumb-item v-if="group">
      <n-icon v-if="group.published" :component="Eye" /><n-icon v-else :component="EyeOff" />
      {{ group.name }}
    </n-breadcrumb-item>
    <n-breadcrumb-item>{{ type.name }}</n-breadcrumb-item>
  </n-breadcrumb>
</template>
