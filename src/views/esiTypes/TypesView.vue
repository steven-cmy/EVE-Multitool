<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
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
import { NSkeleton } from 'naive-ui';
import { useI18n } from 'vue-i18n';

const { typeid } = defineProps({
  typeid: String,
});
const loading = ref(true);
const type = reactive<{ type_id?: number; name?: string; description?: string }>({});
const typeId = parseInt(typeid as string);
const icon = reactive<IMAGE>({
  category: 'types',
  id: typeId,
});
const i18n = useI18n();

watch(
  [() => typeid, () => i18n.locale.value],
  async ([newId, newLocale]) => {
    const newTypeId = parseInt(newId as string);
    // Only trigger if typeid or locale actually changed
    if (newTypeId || newLocale) {
      loading.value = true;
      icon.id = newTypeId;
      const acceptLanguage = newLocale as GetUniverseTypesTypeIdAcceptLanguageEnum;
      const datasource = GetUniverseTypesTypeIdDatasourceEnum.Tranquility;
      const api = new UniverseApi(new Configuration(), undefined, axiosInstance);
      const data = (
        await api.getUniverseTypesTypeId(
          newTypeId,
          acceptLanguage,
          datasource,
          undefined,
          newLocale as GetUniverseTypesTypeIdLanguageEnum,
        )
      ).data;
      Object.assign(type, data);
      loading.value = Object.keys(type).length === 0;
    }
  },
  { immediate: true },
);
</script>

<template>
  <main>
    <n-skeleton height="64px" width="64px" v-if="loading" />
    <img v-else :src="getImageUrl(icon)" :alt="type.name" />
    <h1 v-if="loading">
      <n-skeleton text style="width: 30%" />
    </h1>
    <h1 v-else>
      <span>{{ type.name }}</span>
    </h1>
    <p v-if="loading"><n-skeleton text :repeat="2" /> <n-skeleton text style="width: 60%" /></p>
    <p v-else>
      <EVEMarkup :html="type.description" />
    </p>
  </main>
</template>
