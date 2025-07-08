<script setup lang="ts">
import { getImageUrl } from '@/api/eis';
import { NImage } from 'naive-ui';

const { typeid } = defineProps({
  typeid: {
    type: Number,
    required: true,
  },
  alt: String,
});
const render = getImageUrl({ id: typeid, variation: 'render', category: 'types' });
const icon = getImageUrl({ id: typeid, variation: 'icon', category: 'types' });
</script>
<template>
  <n-image
    :src="icon"
    :fallback-src="icon"
    :preview-src="render"
    lazy
    :show-toolbar="false"
    :alt="alt ?? `Image for type ${{ typeid }}`"
  >
    <template #error> X </template>
  </n-image>
</template>
