<script setup lang="ts">
import { axiosInstance } from '@/api/esi';
import CategoryGroup from '@/components/Type/CategoryGroup.vue';
import { useLanguageStore } from '@/stores/LanguageStore';
import {
  Configuration,
  GetUniverseCategoriesCategoryIdAcceptLanguageEnum,
  GetUniverseCategoriesCategoryIdDatasourceEnum,
  GetUniverseCategoriesCategoryIdLanguageEnum,
  UniverseApi,
  type GetUniverseCategoriesCategoryIdOk,
} from 'eve-esi-client-ts';
import { ref, watch } from 'vue';
import { NPagination, NList, NH1 } from 'naive-ui';
import { useRoute } from 'vue-router';
import GroupTypeList from '@/components/Type/GroupTypeList.vue';

const langStore = useLanguageStore();
const loading = ref(true);
const route = useRoute();
const { categoryid } = defineProps({
  categoryid: {
    type: String,
    required: true,
  },
});
const api = new UniverseApi(new Configuration(), undefined, axiosInstance);
const category = ref<GetUniverseCategoriesCategoryIdOk>();
const page = ref<number>(route.query.page ? parseInt(route.query.page as string) : 1);
const page_size = ref<number>(
  route.query.page_size ? parseInt(route.query.page_size as string) : 10,
);

watch(
  [() => categoryid, () => langStore.getShortLocale()],
  async ([newId, newLocale]) => {
    loading.value = true;
    category.value = {} as GetUniverseCategoriesCategoryIdOk;
    const datasource = 'tranquility';
    category.value = await api
      .getUniverseCategoriesCategoryId(
        parseInt(newId),
        newLocale as GetUniverseCategoriesCategoryIdAcceptLanguageEnum,
        datasource as GetUniverseCategoriesCategoryIdDatasourceEnum,
        undefined,
        newLocale as GetUniverseCategoriesCategoryIdLanguageEnum,
      )
      .catch((err) => {
        console.error('ESI API call failed:', err.message);
      })
      .then((response) => response?.data);
    loading.value = category.value === undefined || Object.keys(category.value).length === 0;
  },
  { immediate: true },
);
</script>
<template>
  <CategoryGroup :category_id="categoryid" />
  <main v-if="category?.groups && category.groups.length > 0">
    <n-list hoverable clickable>
      <template #header>
        <n-h1>{{ category.name }}</n-h1>
      </template>
      <template #footer>
        <n-pagination
          :item-count="category.groups.length"
          :page-sizes="[10, 20, 30, 40]"
          show-quick-jumper
          show-size-picker
          @update:page="page = $event"
          @update:page-size="page_size = $event"
          :page="page"
          :page-size="page_size"
        />
      </template>
      <GroupTypeList
        v-for="gid in category.groups.slice((page - 1) * page_size, page * page_size)"
        :key="gid"
        :id="gid"
        type="group"
      />
    </n-list>
  </main>
</template>
