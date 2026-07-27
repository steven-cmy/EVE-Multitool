<script setup lang="ts">
import { axiosInstance } from '@/api/esi';
import CategoryGroup from '@/components/Type/CategoryGroup.vue';
import { useLanguageStore } from '@/stores/LanguageStore';
import {
  Configuration,
  GetUniverseCategoriesCategoryIdAcceptLanguageEnum,
  GetUniverseTypesXCompatibilityDateEnum,
  UniverseApi,
  type UniverseCategoriesCategoryIdGet,
} from 'eve-esi-client-ts';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import TypeListItems from '@/components/Type/TypeListItems.vue';

const xCompatibilityDate = GetUniverseTypesXCompatibilityDateEnum._20260721;
const xTenant = 'tranquility';
const langStore = useLanguageStore();
const loading = ref(true);
const route = useRoute();
const { categoryid } = defineProps({
  categoryid: {
    type: String,
  },
});
const api = new UniverseApi(new Configuration(), undefined, axiosInstance);
const category = ref<UniverseCategoriesCategoryIdGet>();
const categories = ref<number[]>();
const page = ref<number>(route.query.page ? parseInt(route.query.page as string) : 1);
const page_size = ref<number>(
  route.query.page_size ? parseInt(route.query.page_size as string) : 10,
);

watch(
  [() => categoryid, () => langStore.getShortLocale()],
  async ([newId, newLocale]) => {
    loading.value = true;
    category.value = {} as UniverseCategoriesCategoryIdGet;
    categories.value = [];

    if (newId) {
      category.value = await api
        .getUniverseCategoriesCategoryId(
          parseInt(newId),
          xCompatibilityDate,
          newLocale as GetUniverseCategoriesCategoryIdAcceptLanguageEnum,
          undefined,
          xTenant,
          undefined,
        )
        .catch((err) => {
          console.error('ESI API call failed:', err.message);
        })
        .then((response) => response?.data);
      loading.value = category.value === undefined || Object.keys(category.value).length === 0;
    } else {
      categories.value = await api
        .getUniverseCategories(
          xCompatibilityDate,
          newLocale as GetUniverseCategoriesCategoryIdAcceptLanguageEnum,
          undefined,
          xTenant,
          undefined,
        )
        .catch((err) => {
          console.error('ESI API call failed:', err.message);
        })
        .then((response) => response?.data.sort((n1, n2) => n1 - n2));
      loading.value = Array.isArray(categories.value) ? categories.value.length === 0 : true;
    }
  },
  { immediate: true },
);
</script>
<template>
  <CategoryGroup :category_id="categoryid" />
  <main v-if="loading">
    <n-list hoverable>
      <template #header>
        <n-h1><n-skeleton text style="width: 10%"></n-skeleton></n-h1>
      </template>
      <template #footer>
        <n-pagination
          :item-count="0"
          :page-sizes="[10, 25, 50, 100]"
          show-quick-jumper
          show-size-picker
          @update:page="page = $event"
          @update:page-size="page_size = $event"
          :page="page"
          :page-size="page_size"
        />
      </template>
      <TypeListItems />
    </n-list>
  </main>
  <main v-else>
    <n-list hoverable>
      <template #header>
        <n-h1>{{ category?.name ? category.name : $t('types.category') }}</n-h1>
      </template>
      <template #footer>
        <n-pagination
          :item-count="(category?.groups ? category.groups : categories)?.length"
          :page-sizes="[10, 25, 50, 100]"
          show-quick-jumper
          show-size-picker
          @update:page="page = $event"
          @update:page-size="page_size = $event"
          :page="page"
          :page-size="page_size"
        />
      </template>
      <TypeListItems
        v-for="id in (category?.groups ? category.groups : categories)?.slice(
          (page - 1) * page_size,
          page * page_size,
        )"
        :key="id"
        :id="id"
        :type="$props.categoryid ? 'group' : 'category'"
      />
    </n-list>
  </main>
</template>
