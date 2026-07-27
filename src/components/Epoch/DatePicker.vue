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
import { ref, watch } from 'vue';

const time = defineModel<number>(); // The absolute UTC timestamp
const isUtc = ref<boolean>(true);
const picked = ref<number>(); // Visual representation ONLY

// Standard browser offset (Local - UTC)
const getOffset = () => new Date().getTimezoneOffset() * 60 * 1000;

/**
 * SCENARIO 1: The underlying UTC time changes OR the display mode changes.
 * We update the 'picked' (display) ref accordingly.
 */
watch(
  [time, isUtc],
  ([newUtc, utcMode]) => {
    if (newUtc === undefined || newUtc === null) {
      picked.value = undefined;
      return;
    }

    // If viewing in UTC: add offset to 'trick' the local picker into showing UTC numbers.
    // If viewing in Local: use the timestamp as-is (since NDatePicker is local).
    const visualTime = utcMode ? newUtc + getOffset() : newUtc;

    // Only update ref if the display actually needs to move
    if (picked.value !== visualTime) {
      picked.value = visualTime;
    }
  },
  { immediate: true },
);

/**
 * SCENARIO 2: The user manually picks a new date in the UI.
 * we calculate what that means in UTC and update the model.
 */
watch(picked, (newPicked) => {
  if (newPicked === undefined || newPicked === null) {
    time.value = undefined;
    return;
  }

  // Inverse calculation
  const calculatedUtc = isUtc.value ? newPicked - getOffset() : newPicked;

  // Update the model (Single Source of Truth)
  if (calculatedUtc !== time.value) {
    time.value = calculatedUtc;
  }
});
</script>
