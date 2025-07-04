<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { type IMAGE, getImageUrl } from '@/api/eis';
import EVEMarkup from '@/components/EVEMarkup.vue';
import MarketGroups from '@/components/Type/MarketGroups.vue';
import { axiosInstance, call } from '@/api/esi';
import {
  UniverseApi,
  Configuration,
  GetUniverseTypesTypeIdAcceptLanguageEnum,
  GetUniverseTypesTypeIdDatasourceEnum,
  GetUniverseTypesTypeIdLanguageEnum,
  type GetUniverseTypesTypeIdOk,
} from 'eve-esi-client-ts';
import { NSkeleton } from 'naive-ui';
import { useLanguageStore } from '@/stores/LanguageStore';

const { typeid } = defineProps({
  typeid: String,
});
const loading = ref(true);
const type = reactive<GetUniverseTypesTypeIdOk>({} as GetUniverseTypesTypeIdOk);
const icon = reactive<IMAGE>({
  category: 'types',
  id: parseInt(typeid as string),
});
const api = new UniverseApi(new Configuration(), undefined, axiosInstance);
const langStore = useLanguageStore();

watch(
  [() => typeid, () => langStore.getShortLocale()],
  async ([newId, newLocale]) => {
    const newTypeId = parseInt(newId as string);
    if (newTypeId || newLocale) {
      loading.value = true;
      icon.id = newTypeId;
      const datasource = GetUniverseTypesTypeIdDatasourceEnum.Tranquility;
      const data = await call(
        api.getUniverseTypesTypeId(
          newTypeId,
          newLocale as GetUniverseTypesTypeIdAcceptLanguageEnum,
          datasource,
          undefined,
          newLocale as GetUniverseTypesTypeIdLanguageEnum,
        ),
      );
      Object.assign(type, data);
      loading.value = Object.keys(type).length === 0;
    }
  },
  { immediate: true },
);
</script>

<template>
  <MarketGroups :type="type" />

  <main>
    <n-skeleton v-if="loading" height="64px" width="64px" />
    <img v-else :src="getImageUrl(icon)" :alt="type.name" />
    <h1>
      <n-skeleton v-if="loading" text style="width: 30%" />
      <span v-else>
        {{ type.name }}<sub>{{ type.type_id }}</sub>
      </span>
    </h1>
    <p v-if="loading"><n-skeleton text :repeat="2" /> <n-skeleton text style="width: 60%" /></p>
    <p v-else>
      <EVEMarkup :html="type.description" />
    </p>
  </main>
</template>
