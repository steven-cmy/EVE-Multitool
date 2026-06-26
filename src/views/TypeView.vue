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
  GetUniverseTypesTypeIdXCompatibilityDateEnum,
  type UniverseTypesTypeIdGet,
} from 'eve-esi-client-ts';
import { NCard, NSkeleton, NThing, NH1 } from 'naive-ui';
import { useLanguageStore } from '@/stores/LanguageStore';
import { useRouter } from 'vue-router';
import TypeAttributes from '@/components/Type/TypeAttributes.vue';

const router = useRouter();
const { typeid } = defineProps({
  typeid: String,
});
const loading = ref(true);
const type = reactive<UniverseTypesTypeIdGet>({} as UniverseTypesTypeIdGet);
const api = new UniverseApi(new Configuration(), undefined, axiosInstance);
const xCompatibilityDate = GetUniverseTypesTypeIdXCompatibilityDateEnum._20260609;
const xTenant = 'tranquility';
const langStore = useLanguageStore();

watch(
  [() => typeid, () => langStore.getShortLocale()],
  async ([newId, newLocale]) => {
    const newTypeId = parseInt(newId as string);
    if (newTypeId || newLocale) {
      loading.value = true;
      const data = await api
        .getUniverseTypesTypeId(
          newTypeId,
          xCompatibilityDate,
          newLocale as GetUniverseTypesTypeIdAcceptLanguageEnum,
          undefined,
          xTenant,
          undefined,
        )
        .catch((err) => {
          console.error('ESI API call failed:', err.message);
          router.push({
            // name: 'not-found',
          });
        })
        .then((response) => {
          return response?.data;
        });
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
    <n-card embedded style="margin-top: 2vh">
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
        <TypeAttributes :type="type" />
      </n-thing>
    </n-card>
  </main>
</template>
