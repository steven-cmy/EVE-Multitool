<script setup lang="ts">
import { ref, watch } from 'vue';
import { NH2, NEllipsis, NThing, NListItem } from 'naive-ui';
import TypeImage from '@/components/Type/TypeImage.vue';
import {
  Configuration,
  GetUniverseCategoriesCategoryIdAcceptLanguageEnum,
  GetUniverseCategoriesCategoryIdDatasourceEnum,
  GetUniverseCategoriesCategoryIdLanguageEnum,
  GetUniverseGroupsGroupIdAcceptLanguageEnum,
  GetUniverseGroupsGroupIdDatasourceEnum,
  GetUniverseGroupsGroupIdLanguageEnum,
  GetUniverseTypesTypeIdAcceptLanguageEnum,
  GetUniverseTypesTypeIdDatasourceEnum,
  GetUniverseTypesTypeIdLanguageEnum,
  UniverseApi,
  type GetUniverseCategoriesCategoryIdOk,
  type GetUniverseGroupsGroupIdOk,
  type GetUniverseTypesTypeIdOk,
} from 'eve-esi-client-ts';
import { axiosInstance } from '@/api/esi';
import { useLanguageStore } from '@/stores/LanguageStore';

const loading = ref(true);
const api = new UniverseApi(new Configuration(), undefined, axiosInstance);
const langStore = useLanguageStore();
const data = ref<
  GetUniverseTypesTypeIdOk | GetUniverseGroupsGroupIdOk | GetUniverseCategoriesCategoryIdOk
>();
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    validator: (value: string) => ['type', 'group', 'category'].includes(value),
    required: true,
  },
});

watch(
  () => langStore.getShortLocale(),
  async (newLocale) => {
    loading.value = true;
    data.value = undefined;
    const request = () => {
      const datasource = 'tranquility';
      switch (props.type) {
        case 'type':
          return api.getUniverseTypesTypeId(
            props.id,
            newLocale as GetUniverseTypesTypeIdAcceptLanguageEnum,
            datasource as GetUniverseTypesTypeIdDatasourceEnum,
            undefined,
            newLocale as GetUniverseTypesTypeIdLanguageEnum,
          );
        case 'group':
          return api.getUniverseGroupsGroupId(
            props.id,
            newLocale as GetUniverseGroupsGroupIdAcceptLanguageEnum,
            datasource as GetUniverseGroupsGroupIdDatasourceEnum,
            undefined,
            newLocale as GetUniverseGroupsGroupIdLanguageEnum,
          );
        case 'category':
          return api.getUniverseCategoriesCategoryId(
            props.id,
            newLocale as GetUniverseCategoriesCategoryIdAcceptLanguageEnum,
            datasource as GetUniverseCategoriesCategoryIdDatasourceEnum,
            undefined,
            newLocale as GetUniverseCategoriesCategoryIdLanguageEnum,
          );
      }
    };
    data.value = await request()
      ?.catch((err) => {
        console.error('ESI API call failed:', err.message);
      })
      .then((response) => response?.data);
    loading.value = data.value === undefined;
  },
  { immediate: true },
);
</script>
<template>
  <n-list-item v-if="data">
    <RouterLink
      :to="
        type === 'type'
          ? { name: 'types-showinfo', params: { typeid: id } }
          : { name: 'group', params: { groupid: id } }
      "
    >
      <n-thing>
        <template #avatar>
          <TypeImage v-if="'type_id' in data" :typeid="data.type_id" />
        </template>
        <template #header>
          <n-h2>{{ data.name }}</n-h2>
        </template>
        <template v-if="'type_id' in data" #description>
          <n-ellipsis style="max-width: 70vw" :tooltip="false">{{
            data.description.replace(/<[^>]+>/g, '')
          }}</n-ellipsis>
        </template>
        <template v-if="'category_id' in data" #header-extra>
          <span v-if="'types' in data">{{ data.types.length }}</span>
          <span v-if="'groups' in data">{{ data.groups.length }}</span>
        </template>
      </n-thing>
    </RouterLink>
  </n-list-item>
</template>
