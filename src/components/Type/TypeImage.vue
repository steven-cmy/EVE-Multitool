<script setup lang="ts">
import { getImageUrl } from '@/api/eis';

const { typeid } = defineProps({
  typeid: {
    type: Number,
    required: true,
  },
  alt: String,
});
// const render = getImageUrl({ id: typeid, variation: 'render', category: 'types' });
const icon = getImageUrl({ id: typeid, variation: 'icon', category: 'types' });
</script>
<template>
  <n-image
    :src="icon"
    fallback-src="/images/0_64.png"
    preview-disabled
    :alt="alt ?? `Image for type ${typeid}`"
  />
</template>
