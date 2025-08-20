<script setup lang="ts">
import { NTabs, NTabPane } from 'naive-ui';
import type { GetUniverseTypesTypeIdOk } from 'eve-esi-client-ts';
import { toRefs } from 'vue';
import { useI18n } from 'vue-i18n';
import EVEMarkup from '../EVEMarkup.vue';

const i18n = useI18n();
const props = defineProps({
  type: {
    type: Object as () => GetUniverseTypesTypeIdOk,
    default: {} as GetUniverseTypesTypeIdOk,
  },
});
const { type } = toRefs(props);
</script>
<template>
  <n-tabs type="card" animated>
    <n-tab-pane name="description" :tab="i18n.t('types.attributes.description')">
      <EVEMarkup :html="type.description" />
    </n-tab-pane>
    <n-tab-pane name="raw" tab="RAW">
      {{ type }}
      <hr>

    </n-tab-pane>
  </n-tabs>
</template>
