<template>
  <n-flex align="center">
    <n-switch v-model:value="isUtc" size="large">
      <template #checked>{{ $t('epoch.UTC') }}</template>
      <template #unchecked>{{ $t('epoch.local') }}</template>
    </n-switch>
    <n-date-picker v-model:value="picked" type="datetime" clearable />
  </n-flex>
</template>
<script setup lang="ts">
import { NFlex, NSwitch, NDatePicker } from 'naive-ui';
import { ref, watch } from 'vue';

const time = defineModel<number>();
const picked = ref<number>();
const isUtc = ref<boolean>(true);

watch(
  [picked, isUtc],
  ([newPicked, newIsUtc]) => {
    if (newPicked) {
      time.value = newIsUtc ? newPicked - new Date().getTimezoneOffset() * 60 * 1000 : newPicked;
    }
  },
  { immediate: true },
);
</script>
