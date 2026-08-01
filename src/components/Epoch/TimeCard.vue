<template>
  <n-card :title="`${name || longName}`.concat(shortName ? ` (${shortName})` : '')" hoverable>
    <n-h2>
      <n-time :time-zone="timezone" :time="now" format="HH:mm:ss" />
    </n-h2>
    <br />
    <n-h3><n-time :time-zone="timezone" :time="now" format="PPPP BBBBB" /></n-h3>
    <!-- <br />
    {{ now }} -->
  </n-card>
</template>
<script setup lang="ts">
import { computed, ref, toRefs, watch } from 'vue';
import { useLanguageStore } from '@/stores/LanguageStore';

const props = defineProps({
  timestamp: {
    type: String,
    required: true,
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
const longName = computed(() => getTimezoneDisplayName());
const shortName = computed(() => getTimezoneDisplayName('short'));

watch(
  timestamp,
  (newTs) => {
    now.value = parseInt(newTs);
  },
  { immediate: true },
);

function getTimezoneDisplayName(
  style: 'long' | 'short' | 'shortOffset' | 'longOffset' | 'shortGeneric' | 'longGeneric' = 'long',
  timeZoneCode: string | undefined = timezone?.value,
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
<style lang="css" scoped></style>
