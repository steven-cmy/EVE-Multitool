<template>
  <n-card :title="name || getTimezoneDisplayName(timezone)" hoverable>
    <n-h2>
      <n-time :time-zone="timezone" :time="now" format="HH:mm:ss" unix />
      {{ getTimezoneDisplayName(timezone, 'short') }}
    </n-h2>
    <br />
    <n-h3><n-time :time-zone="timezone" :time="now" format="yyyy-MM-dd" unix /></n-h3>
    <p>{{ timestamp }}</p>
  </n-card>
</template>
<script setup lang="ts">
import { NCard, NH2, NH3, NTime } from 'naive-ui';
import { ref, onMounted, onUnmounted, toRefs } from 'vue';
import { useLanguageStore } from '@/stores/LanguageStore';

const props = defineProps({
  timestamp: {
    type: String,
    required: false,
  },
  timezone: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
});
const { timestamp, timezone, name } = toRefs(props);
const langStore = useLanguageStore();
const now = ref<number>();

if (!timestamp?.value) {
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
  now.value = parseInt(timestamp.value);
}

function getTimezoneDisplayName(
  timeZoneCode: string | undefined,
  style: 'long' | 'short' | 'shortOffset' | 'longOffset' | 'shortGeneric' | 'longGeneric' = 'long',
  locale = langStore.getShortLocale(),
) {
  try {
    const formatter = new Intl.DateTimeFormat(locale, {
      timeZone: timeZoneCode,
      timeZoneName: style,
    });

    return (
      formatter.formatToParts(new Date()).find((part) => part.type === 'timeZoneName')?.value ||
      timeZoneCode
    );
  } catch {
    return timeZoneCode;
  }
}
</script>
<style lang="css" scoped>
.n-card {
  height: 100%;
}
</style>
