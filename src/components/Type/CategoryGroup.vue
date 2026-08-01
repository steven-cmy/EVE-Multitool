<script setup lang="ts">
import { ref, toRefs, watch } from 'vue';
import {
  Configuration,
  GetUniverseCategoriesCategoryIdAcceptLanguageEnum,
  type UniverseCategoriesCategoryIdGet,
  GetUniverseCategoriesCategoryIdXCompatibilityDateEnum,
  GetUniverseGroupsGroupIdAcceptLanguageEnum,
  type UniverseGroupsGroupIdGet,
  type UniverseTypesTypeIdGet,
  UniverseApi,
} from 'eve-esi-client-ts';
import { axiosInstance } from '@/api/esi';
import { useLanguageStore } from '@/stores/LanguageStore';
import { Eye, EyeOff } from '@vicons/tabler';

const xCompatibilityDate = GetUniverseCategoriesCategoryIdXCompatibilityDateEnum._20260721;
const xTenant = 'tranquility';
const langStore = useLanguageStore();
const loading = ref(true);
const props = defineProps({
  type: Object as () => UniverseTypesTypeIdGet,
  group_id: String,
  category_id: String,
});
const { type, group_id, category_id } = toRefs(props);
const group = ref<UniverseGroupsGroupIdGet>();
const category = ref<UniverseCategoriesCategoryIdGet>();
const api = new UniverseApi(new Configuration(), undefined, axiosInstance);

watch(
  [() => type?.value?.group_id, group_id, category_id, () => langStore.getShortLocale()],
  async ([newTypeGroupId, newGroupId, newCategoryId, newLocale]) => {
    loading.value = true;
    group.value = {} as UniverseGroupsGroupIdGet;
    category.value = {} as UniverseCategoriesCategoryIdGet;

    // Ensure targetGroupId is a number
    const rawGroupId = newGroupId ?? newTypeGroupId;
    const targetGroupId = typeof rawGroupId === 'function' ? rawGroupId() : rawGroupId;
    if (targetGroupId) {
      group.value = await api
        .getUniverseGroupsGroupId(
          Number(targetGroupId),
          xCompatibilityDate,
          newLocale as unknown as GetUniverseGroupsGroupIdAcceptLanguageEnum,
          undefined,
          xTenant,
          undefined,
        )
        .catch((err) => {
          console.error('ESI API call failed:', err.message);
        })
        .then((response) => response?.data);
    }
    let targetCategoryId: number | undefined;
    if (newCategoryId) {
      // Unwrap Ref or function, then convert to number
      if (typeof newCategoryId === 'function') {
        targetCategoryId = Number(newCategoryId());
      } else if (typeof newCategoryId === 'object' && 'value' in newCategoryId) {
        targetCategoryId = Number(newCategoryId.value);
      } else {
        targetCategoryId = Number(newCategoryId);
      }
    } else if (group.value?.category_id) {
      targetCategoryId = Number(group.value.category_id);
    }

    if (targetCategoryId) {
      category.value = await api
        .getUniverseCategoriesCategoryId(
          targetCategoryId,
          xCompatibilityDate,
          newLocale as unknown as GetUniverseCategoriesCategoryIdAcceptLanguageEnum,
          undefined,
          xTenant,
          undefined,
        )
        .catch((err) => {
          console.error('ESI API call failed:', err.message);
        })
        .then((response) => response?.data);
    }
    loading.value = !(group.value?.group_id || category.value?.category_id);
    if (!(props.category_id && props.group_id && props.type && props.type.type_id)) {
      loading.value = false;
    }
  },
  { immediate: true },
);
</script>
<template>
  <div v-if="loading"><n-skeleton text style="width: 30%"></n-skeleton></div>
  <n-breadcrumb v-else separator=">">
    <n-breadcrumb-item>
      <RouterLink :to="{ name: 'categories' }">{{ $t('types.category') }}</RouterLink>
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
    <n-breadcrumb-item v-if="type?.name">{{ type.name }}</n-breadcrumb-item>
  </n-breadcrumb>
</template>
