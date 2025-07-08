<script setup lang="ts">
import { ref, watch } from 'vue';
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
    default: ref<GetUniverseTypesTypeIdOk>(),
  },
  group_id: {
    type: String,
    default: null,
  },
  category_id: {
    type: String,
    default: null,
  },
});
const group = ref<GetUniverseGroupsGroupIdOk>();
const category = ref<GetUniverseCategoriesCategoryIdOk>();
const api = new UniverseApi(new Configuration(), undefined, axiosInstance);

watch(
  [props.type, () => langStore.getShortLocale()],
  async ([newType, newLocale]) => {
    loading.value = true;
    group.value = {} as GetUniverseGroupsGroupIdOk;
    category.value = {} as GetUniverseCategoriesCategoryIdOk;
    const datasource = 'tranquility';
    const targetGroupId = props.group_id ? parseInt(props.group_id) : newType?.group_id;
    if (targetGroupId) {
      group.value = await api
        .getUniverseGroupsGroupId(
          targetGroupId,
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
    const targetCategoryId = props.category_id
      ? parseInt(props.category_id)
      : group.value?.category_id;
    if (targetCategoryId) {
      category.value = await api
        .getUniverseCategoriesCategoryId(
          targetCategoryId,
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
    <n-breadcrumb-item v-if="category && Object.keys(category).length > 0">
      <RouterLink :to="{ name: 'category', params: { categoryid: category.category_id } }">
        <n-icon v-if="category.published" :component="Eye" /><n-icon v-else :component="EyeOff" />
        {{ category.name }}
      </RouterLink>
    </n-breadcrumb-item>
    <n-breadcrumb-item v-if="group && Object.keys(group).length > 0">
      <RouterLink :to="{ name: 'group', params: { groupid: group.group_id } }">
        <n-icon v-if="group.published" :component="Eye" /><n-icon v-else :component="EyeOff" />
        {{ group.name }}
      </RouterLink>
    </n-breadcrumb-item>
    <n-breadcrumb-item v-if="props.type.name">{{ type.name }}</n-breadcrumb-item>
  </n-breadcrumb>
</template>
