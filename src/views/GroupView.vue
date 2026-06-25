<script setup lang="ts">
import { axiosInstance } from '@/api/esi';
import CategoryGroup from '@/components/Type/CategoryGroup.vue';
import { useLanguageStore } from '@/stores/LanguageStore';
import {
  Configuration,
  GetUniverseGroupsGroupIdAcceptLanguageEnum,
  GetUniverseGroupsGroupIdXCompatibilityDateEnum,
  UniverseApi,
  type UniverseGroupsGroupIdGet,
} from 'eve-esi-client-ts';
import { ref, watch } from 'vue';
import { NPagination, NList, NH1 } from 'naive-ui';
import { useRoute } from 'vue-router';
import TypeListItems from '@/components/Type/TypeListItems.vue';

const xCompatibilityDate = GetUniverseGroupsGroupIdXCompatibilityDateEnum._20260609;
const xTenant = 'tranquility';
const langStore = useLanguageStore();
const loading = ref(true);
const route = useRoute();
const { groupid } = defineProps({
  groupid: {
    type: String,
    required: true,
  },
});
const api = new UniverseApi(new Configuration(), undefined, axiosInstance);
const group = ref<UniverseGroupsGroupIdGet>();
const page = ref<number>(route.query.page ? parseInt(route.query.page as string) : 1);
const page_size = ref<number>(
  route.query.page_size ? parseInt(route.query.page_size as string) : 10,
);

watch(
  [() => groupid, () => langStore.getShortLocale()],
  async ([newId, newLocale]) => {
    loading.value = true;
    group.value = {} as UniverseGroupsGroupIdGet;
    group.value = await api
      .getUniverseGroupsGroupId(
        parseInt(newId),
        xCompatibilityDate,
        newLocale as GetUniverseGroupsGroupIdAcceptLanguageEnum,
        undefined,
        xTenant,
        undefined,
      )
      .catch((err) => {
        console.error('ESI API call failed:', err.message);
      })
      .then((response) => response?.data);
    loading.value = group.value === undefined || Object.keys(group.value).length === 0;
  },
  { immediate: true },
);
</script>
<template>
  <CategoryGroup :group_id="groupid" />
  <main v-if="group?.types && group.types.length > 0">
    <n-list hoverable>
      <template #header>
        <n-h1>{{ group.name }}</n-h1>
      </template>
      <template #footer>
        <n-pagination
          :item-count="group.types.length"
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
        v-for="tid in group.types.slice((page - 1) * page_size, page * page_size)"
        :key="tid"
        :id="tid"
        type="type"
      />
    </n-list>
  </main>
</template>
