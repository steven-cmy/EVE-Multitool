<template>
  <!-- <n-h1>
    <n-flex justify="space-between">
      <n-time
        v-if="!Number.isNaN(ts)"
        :time="ts"
        :to="Math.floor(Date.now() / 1000)"
        type="relative"
        unix
      />
      <span v-else />
      <n-flex>
        <n-switch :default-value="!Number.isNaN(ts)" @update:value="toggleLock">
          <template #checked-icon>
            <n-icon :component="Lock" />
          </template>
          <template #unchecked-icon>
            <n-icon :component="LockOpen" />
          </template>
        </n-switch>
      </n-flex>
    </n-flex>
  </n-h1>
  <n-grid x-gap="12" y-gap="8" :cols="5">
    <n-grid-item
      ><TimeCard :timestamp="timestamp" timezone="UTC" :name="$t('epoch.UTC')"
    /></n-grid-item>
    <n-grid-item><TimeCard :timestamp="timestamp" :name="$t('epoch.local')" /></n-grid-item>
    <n-grid-item v-for="tz in timezones" :key="tz">
      <TimeCard :timezone="tz" :timestamp="timestamp" />
    </n-grid-item>
  </n-grid> -->
  <TimeCard :timestamp="ts"/>
</template>
<script setup lang="ts">
import { NFlex, NGrid, NGridItem, NH1, NIcon, NSwitch, NTime } from 'naive-ui';
import { Lock, LockOpen } from '@vicons/tabler';
import TimeCard from '@/components/Epoch/Timecard.vue';
import { computed, ref, toRefs, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const timezones = [
  'US/Pacific',
  'US/Central',
  'US/Eastern',
  'Atlantic/Reykjavik',
  'Australia/Sydney',
  'Europe/Moscow',
  'Asia/Shanghai',
];

const { timestamp } = defineProps({
  timestamp: {
    type: String,
    required: false,
  },
});

const ts=ref()

watch(
  () => timestamp,
  (newTs) => {
    console.log('new', newTs);
    ts.value = newTs?.toString();
  },
  {
    immediate: true,
  },
);

function toggleLock() {
  if (Number.isNaN(ts.value)) {
    console.log('@', ts.value);
    router.push({ name: 'epoch', params: { timestamp: Math.floor(Date.now() / 1000).toString() } });
  }
}
</script>
