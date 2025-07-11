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
import { NSkeleton, NThing, NH1, NText } from 'naive-ui';
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
    <n-thing>
      <template #avatar>
        <n-skeleton v-if="loading" height="64px" width="64px" />
        <TypeImage v-else :typeid="type.type_id" />
      </template>
      <template #header>
        <n-skeleton v-if="loading" text style="width: 20%" />
        <n-h1 v-else>
          {{ type.name }}
        </n-h1>
      </template>
      <template #header-extra>
        {{ type.type_id }}
      </template>
      <template #description>
        <n-text>
          <EVEMarkup :html="type.description" />
        </n-text>
      </template>
      <!-- Thing here -->
    </n-thing>
  </main>
</template>
