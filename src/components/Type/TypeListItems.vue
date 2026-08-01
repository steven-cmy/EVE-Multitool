<script setup lang="ts">
import { ref, watch } from 'vue';
import TypeImage from '@/components/Type/TypeImage.vue';
import {
  Configuration,
  GetUniverseCategoriesCategoryIdAcceptLanguageEnum,
  GetUniverseGroupsGroupIdAcceptLanguageEnum,
  GetUniverseTypesTypeIdAcceptLanguageEnum,
  GetUniverseTypesTypeIdXCompatibilityDateEnum,
  UniverseApi,
  type UniverseCategoriesCategoryIdGet,
  type UniverseGroupsGroupIdGet,
  type UniverseTypesTypeIdGet,
} from 'eve-esi-client-ts';
import { axiosInstance } from '@/api/esi';
import { useLanguageStore } from '@/stores/LanguageStore';

const xCompatibilityDate = GetUniverseTypesTypeIdXCompatibilityDateEnum._20260721;
const xTenant = 'tranquility';
const loading = ref(true);
const api = new UniverseApi(new Configuration(), undefined, axiosInstance);
const langStore = useLanguageStore();
const data = ref<
  UniverseTypesTypeIdGet | UniverseGroupsGroupIdGet | UniverseCategoriesCategoryIdGet
>();
const props = defineProps({
  id: {
    type: Number,
  },
  type: {
    type: String,
    validator: (value: string) => ['type', 'group', 'category'].includes(value),
  },
});

watch(
  () => langStore.getShortLocale(),
  async (newLocale) => {
    loading.value = true;
    const id = props.id;
    const type = props.type;
    if (id && type) {
      data.value = undefined;
      const request = () => {
        switch (type) {
          case 'type':
            return api.getUniverseTypesTypeId(
              id,
              xCompatibilityDate,
              newLocale as GetUniverseTypesTypeIdAcceptLanguageEnum,
              undefined,
              xTenant,
              undefined,
            );
          case 'group':
            return api.getUniverseGroupsGroupId(
              id,
              xCompatibilityDate,
              newLocale as GetUniverseGroupsGroupIdAcceptLanguageEnum,
              undefined,
              xTenant,
              undefined,
            );
          case 'category':
            return api.getUniverseCategoriesCategoryId(
              id,
              xCompatibilityDate,
              newLocale as GetUniverseCategoriesCategoryIdAcceptLanguageEnum,
              undefined,
              xTenant,
              undefined,
            );
        }
      };
      data.value = await request()
        ?.catch((err) => {
          console.error('ESI API call failed:', err.message);
        })
        .then((response) => response?.data);
      loading.value = data.value === undefined;
    }
  },
  { immediate: true },
);
</script>
<template>
  <n-list-item v-if="data">
    <n-thing content-indented>
      <template #avatar>
        <TypeImage v-if="'type_id' in data" :typeid="data.type_id" />
      </template>
      <template #header>
        <n-h2 v-if="loading"><n-skeleton text style="width: 30%"></n-skeleton></n-h2>
        <n-h2 v-else>
          <RouterLink
            :to="{ name: type === 'type' ? 'types-showinfo' : type, params: { [`${type}id`]: id } }"
          >
            {{ data.name }}
          </RouterLink>
        </n-h2>
      </template>
      <template v-if="'category_id' in data" #header-extra>
        <span v-if="'types' in data">{{ data.types.length }}</span>
        <span v-if="'groups' in data">{{ data.groups.length }}</span>
      </template>
      <template v-if="'description' in data" #description>
        <n-ellipsis style="max-width: 70vw" :tooltip="false">{{
          data.description.replace(/<[^>]+>/g, '')
        }}</n-ellipsis>
      </template>
      <!-- <template #footer> Footer </template>
        <template #action> </template> -->
    </n-thing>
  </n-list-item>
</template>
