<script setup lang="ts">
import { onMounted, reactive, watch } from 'vue';
import { type IMAGE, getImageUrl } from '@/api/eis';
import EVEMarkup from '@/components/EVEMarkup.vue';
import { axiosInstance } from '@/utils/esiUtil';
import {
  UniverseApi,
  Configuration,
  GetUniverseTypesTypeIdAcceptLanguageEnum,
  GetUniverseTypesTypeIdDatasourceEnum,
  GetUniverseTypesTypeIdLanguageEnum,
} from '@/api/esi';
const { typeid } = defineProps({
  typeid: String,
});
const type = reactive<{ type_id?: number; name?: string; description?: string }>({});
const typeId = parseInt(typeid as string);
const icon: IMAGE = {
  category: 'types',
  id: typeId,
};

onMounted(async () => {
  if (typeId) {
    const language =
      (localStorage.getItem('locale') as GetUniverseTypesTypeIdLanguageEnum) ??
      GetUniverseTypesTypeIdLanguageEnum.En;
    const acceptLanguage = language as GetUniverseTypesTypeIdAcceptLanguageEnum;
    const datasource = GetUniverseTypesTypeIdDatasourceEnum.Tranquility;
    const api = new UniverseApi(new Configuration(), undefined, axiosInstance);
    Object.assign(
      type,
      (await api.getUniverseTypesTypeId(typeId, acceptLanguage, datasource, undefined, language))
        .data,
    );
  }
});

watch(
  () => typeid,
  async (newId) => {
    console.log(newId);
    if (typeId) {
      const language =
        (localStorage.getItem('locale') as GetUniverseTypesTypeIdLanguageEnum) ??
        GetUniverseTypesTypeIdLanguageEnum.En;
      const acceptLanguage = language as GetUniverseTypesTypeIdAcceptLanguageEnum;
      const datasource = GetUniverseTypesTypeIdDatasourceEnum.Tranquility;
      const api = new UniverseApi(new Configuration(), undefined, axiosInstance);
      Object.assign(
        type,
        (await api.getUniverseTypesTypeId(typeId, acceptLanguage, datasource, undefined, language))
          .data,
      );
    }
  },
);
</script>

<template>
  <main v-if="type.type_id">
    <img v-if="type.type_id" :src="getImageUrl(icon)" :alt="type.name" />
    <h1 v-if="type.name">{{ type.name }}</h1>
    <p><EVEMarkup :html="type.description" /></p>
    <!-- <p v-if="type.description" v-html="processEVEMarkup(type.description, router)"></p> -->
  </main>
</template>
