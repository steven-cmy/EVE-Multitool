<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import EVEMarkup from '@/components/EVEMarkup.vue';
import MarketGroups from '@/components/Type/MarketGroups.vue';
import CategoryGroup from '@/components/Type/CategoryGroup.vue';
import TypeImage from '@/components/Type/TypeImage.vue';
import { axiosInstance } from '@/api/esi';
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
import { useRouter } from 'vue-router';

const router = useRouter();
const { typeid } = defineProps({
  typeid: String,
});
const loading = ref(true);
const type = reactive<GetUniverseTypesTypeIdOk>({} as GetUniverseTypesTypeIdOk);
const api = new UniverseApi(new Configuration(), undefined, axiosInstance);
const langStore = useLanguageStore();

watch(
  [() => typeid, () => langStore.getShortLocale()],
  async ([newId, newLocale]) => {
    const newTypeId = parseInt(newId as string);
    if (newTypeId || newLocale) {
      loading.value = true;
      const datasource = GetUniverseTypesTypeIdDatasourceEnum.Tranquility;
      const data = await api
        .getUniverseTypesTypeId(
          newTypeId,
          newLocale as GetUniverseTypesTypeIdAcceptLanguageEnum,
          datasource,
          undefined,
          newLocale as GetUniverseTypesTypeIdLanguageEnum,
        )
        .catch((err) => {
          console.error('ESI API call failed:', err.message);
          router.push({
            // name: 'not-found',
          });
        })
        .then((response) => response?.data);
      Object.assign(type, data);
      loading.value = Object.keys(type).length === 0;
    }
  },
  { immediate: true },
);
</script>

<template>
  <CategoryGroup :type="type" />
  <MarketGroups :type="type" />
  <main>
    <n-skeleton v-if="loading" height="64px" width="64px" />
    <TypeImage v-else :typeid="type.type_id" />
    <h1>
      <n-skeleton v-if="loading" text style="width: 20%" />
      <span v-else>
        {{ type.name }}<sub>{{ type.type_id }}</sub>
      </span>
    </h1>
    <p v-if="loading"><n-skeleton text :repeat="3" /> <n-skeleton text style="width: 60%" /></p>
    <p v-else>
      <EVEMarkup :html="type.description" />
    </p>
  </main>
</template>
