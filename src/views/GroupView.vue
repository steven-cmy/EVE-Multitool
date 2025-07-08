<script setup lang="ts">
import { axiosInstance } from '@/api/esi';
import CategoryGroup from '@/components/Type/CategoryGroup.vue';
import { useLanguageStore } from '@/stores/LanguageStore';
import {
  Configuration,
  GetUniverseGroupsGroupIdAcceptLanguageEnum,
  GetUniverseGroupsGroupIdDatasourceEnum,
  GetUniverseGroupsGroupIdLanguageEnum,
  UniverseApi,
  type GetUniverseGroupsGroupIdOk,
} from 'eve-esi-client-ts';
import { ref, watch } from 'vue';
import { NPagination, NList, NH1 } from 'naive-ui';
import { useRoute } from 'vue-router';
import GroupTypeList from '@/components/Type/GroupTypeList.vue';

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
const group = ref<GetUniverseGroupsGroupIdOk>();
const page = ref<number>(route.query.page ? parseInt(route.query.page as string) : 1);
const page_size = ref<number>(
  route.query.page_size ? parseInt(route.query.page_size as string) : 10,
);

watch(
  [() => groupid, () => langStore.getShortLocale()],
  async ([newId, newLocale]) => {
    loading.value = true;
    group.value = {} as GetUniverseGroupsGroupIdOk;
    const datasource = 'tranquility';
    group.value = await api
      .getUniverseGroupsGroupId(
        parseInt(newId),
        newLocale as GetUniverseGroupsGroupIdAcceptLanguageEnum,
        datasource as GetUniverseGroupsGroupIdDatasourceEnum,
        undefined,
        newLocale as GetUniverseGroupsGroupIdLanguageEnum,
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
    <n-list hoverable clickable>
      <template #header>
        <n-h1>{{ group.name }}</n-h1>
      </template>
      <template #footer>
        <n-pagination
          :item-count="group.types.length"
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
        v-for="tid in group.types.slice((page - 1) * page_size, page * page_size)"
        :key="tid"
        :id="tid"
        type="type"
      />
    </n-list>
  </main>
</template>
