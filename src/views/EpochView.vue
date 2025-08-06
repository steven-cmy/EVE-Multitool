<template>
  <n-flex justify="center">
    <n-card title="EVE/UTC" hoverable>
      <n-time time-zone="UTC" :time="now" unix />
    </n-card>
    <n-card :title="$t('epoch.local')" hoverable>
      <n-time :time="now" unix />
    </n-card>
    <n-card v-for="{ tzname, tzcode } in timezones" :key="tzcode" :title="$t(tzname)" hoverable>
      <n-time :time-zone="tzcode" :time="now" unix />
    </n-card>
  </n-flex>
  <br />
  <n-time :time="now" unix />
  <br />
  <n-time
    :time="now"
    :to="Math.floor(Date.now() / 1000)"
    type="relative"
    unix
    v-if="!Number.isNaN(ts)"
  />
</template>
<script setup lang="ts">
import { NCard, NFlex, NTime } from 'naive-ui';
import { ref, onMounted, onUnmounted } from 'vue';

const timezones = [
  { tzname: 'epoch.USW', tzcode: 'US/Pacific' },
  { tzname: 'epoch.USC', tzcode: 'US/Central' },
  { tzname: 'epoch.USE', tzcode: 'US/Eastern' },
  { tzname: 'epoch.IS', tzcode: 'Atlantic/Reykjavik' },
  { tzname: 'epoch.RUW', tzcode: 'Europe/Moscow' },
  { tzname: 'epoch.CN', tzcode: 'Asia/Shanghai' },
];

const { timestamp } = defineProps({
  timestamp: String,
});
const ts = timestamp ? parseInt(timestamp) : NaN;
const now = ref();
if (Number.isNaN(ts)) {
  let timer: number;

  onMounted(() => {
    timer = setInterval(() => {
      now.value = Math.floor(Date.now() / 1000);
    }, 1000);
  });

  onUnmounted(() => {
    clearInterval(timer);
  });
} else {
  now.value = ts;
}
</script>
<style lang="css" scoped>
.n-card {
  width: fit-content;
}
</style>
