<template>
  <n-flex justify="space-between" align="center">
    <n-h1>
      <Transition name="fade">
        <n-time v-if="locked" :time="parseInt(ts)" :to="now" type="relative" />
      </Transition>
      &nbsp;
    </n-h1>
    <n-flex align="center">
      <Transition name="slide-fade">
        <span v-if="locked">
          <n-button text @click="goTo(now)">
            <template #icon>
              <NIcon>
                <Clock />
              </NIcon>
            </template>
            {{ $t('epoch.live') }}
          </n-button>
          <n-divider vertical />
        </span>
      </Transition>

      <n-switch v-model:value="locked" size="large">
        <template #checked-icon>
          <n-icon :component="Lock" />
        </template>
        <template #unchecked-icon>
          <n-icon :component="LockOpen" />
        </template>
      </n-switch>
      <DatePicker v-model="picked" />
    </n-flex>
  </n-flex>

  <n-flex justify="space-between" align="center">
    <CopyToDiscord :timestamp="ts" />
    <TimeCalculator :timestamp="ts" />
  </n-flex>
  <n-grid x-gap="12" y-gap="8" :cols="5">
    <n-grid-item>
      <TimeCard :timestamp="ts" timezone="UTC" :name="$t('epoch.UTC')" />
    </n-grid-item>
    <n-grid-item><TimeCard :timestamp="ts" :name="$t('epoch.local')" /></n-grid-item>
    <n-grid-item v-for="tz in timezones" :key="tz">
      <TimeCard :timezone="tz" :timestamp="ts" />
    </n-grid-item>
  </n-grid>
</template>
<script setup lang="ts">
import { NButton, NDivider, NFlex, NGrid, NGridItem, NH1, NIcon, NSwitch, NTime } from 'naive-ui';
import { Clock, Lock, LockOpen } from '@vicons/tabler';
import TimeCard from '@/components/Epoch/TimeCard.vue';
import TimeCalculator from '@/components/Epoch/TimeCalculator.vue';
import CopyToDiscord from '@/components/Epoch/CopyToDiscord.vue';
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import DatePicker from '@/components/Epoch/DatePicker.vue';

const timezones = [
  'US/Pacific',
  'US/Mountain',
  'US/Central',
  'US/Eastern',
  'Europe/London',
  'Europe/Brussels',
  'Europe/Sofia',
  'Australia/Sydney',
  'Europe/Moscow',
  'Asia/Shanghai',
];

const router = useRouter();
const { timestamp } = defineProps({
  timestamp: {
    type: String,
    required: false,
  },
});

const locked = ref<boolean>((timestamp ?? '') !== '');
const picked = ref<number>();
const now = ref<number>(Date.now());
const ts = ref<string>(now.value.toString());
const timer = ref<number>();

function goTo(time?: number) {
  locked.value = time !== undefined;
  if (time) {
    ts.value = time.toString();
  }

  const routeConfig =
    time !== undefined
      ? { name: 'epoch', params: { timestamp: Math.floor(time / 1000).toString() } }
      : { name: 'epoch', params: { timestamp: '' } };

  router.replace(routeConfig);
}

watch(
  () => timestamp,
  (newTs) => {
    picked.value = newTs ? parseInt(newTs) * 1000 : undefined;
  },
  { immediate: true },
);

watch(
  () => picked.value,
  (newPick) => {
    if (newPick) {
      goTo(newPick);
    }
  },
);

onMounted(() => {
  timer.value = setInterval(() => {
    now.value = Date.now();
    if (locked.value) {
      if (timestamp) {
        ts.value = (parseInt(timestamp) * 1000).toString();
      } else {
        goTo(now.value);
      }
    } else {
      ts.value = now.value.toString();
    }
  }, 100);
});

onUnmounted(() => {
  if (timer.value) {
    clearInterval(timer.value);
  }
});
</script>

<style lang="css" scoped>
.n-card {
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
