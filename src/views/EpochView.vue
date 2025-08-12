<template>
  <n-h1>
    <n-flex justify="space-between" align="center">
      <Transition name="fade">
        <n-time v-if="locked" :time="parseInt(ts)" :to="now" type="relative" />
      </Transition>
      &nbsp;
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
      </n-flex>
    </n-flex>
  </n-h1>
  <n-flex justify="space-between" align="center">
    <CopyToDiscord :timestamp="ts" />
    <n-flex vertical>
      <n-date-picker v-model:value="picked" type="datetime" clearable />
      <TimeCalculator :timestamp="ts" />
    </n-flex>
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
import {
  NButton,
  NDatePicker,
  NDivider,
  NFlex,
  NGrid,
  NGridItem,
  NH1,
  NIcon,
  NSwitch,
  NTime,
} from 'naive-ui';
import { Clock, Lock, LockOpen } from '@vicons/tabler';
import TimeCard from '@/components/Epoch/TimeCard.vue';
import TimeCalculator from '@/components/Epoch/TimeCalculator.vue';
import CopyToDiscord from '@/components/Epoch/CopyToDiscord.vue';
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const timezones = [
  'US/Pacific',
  'US/Central',
  'US/Eastern',
  'Atlantic/Reykjavik',
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
  // locked.value = time !== undefined;

  const routeConfig =
    time !== undefined
      ? { name: 'epoch', params: { timestamp: Math.floor(time / 1000).toString() } }
      : { name: 'epoch', params: { timestamp: '' } };

  router.replace(routeConfig);
}

watch(
  [() => timestamp, locked, picked],
  ([newTs, newLock, newPick], [oldTs, , oldPick]) => {
    console.log(newTs, newLock, newPick);
    if (newLock) {
      if (newPick !== undefined) {
        goTo(newPick);
      } else {
        goTo(now.value);
      }
    } else {
      goTo();
      // locked.value = newTs !== '';
    }

    // // Handle timestamp change
    // if (newTs && newTs !== oldTs) {
    //   ts.value = (parseInt(newTs) * 1000).toString();
    //   locked.value = newTs !== undefined;
    //   return;
    // }

    // if (newTs && newTs !== '') {
    //   goTo(parseInt(newTs) * 1000);
    // }

    // // Handle picked value change
    // if (newPick && newPick !== oldPick) {
    //   goTo(newPick);
    //   return;
    // }

    // // Handle lock state
    // if (newLock && !newPick) {
    //   goTo(now.value);
    // } else if (!newLock) {
    //   goTo();
    // }
  },
  { immediate: true },
);

onMounted(() => {
  timer.value = setInterval(() => {
    now.value = Date.now();
    if (!locked.value) {
      ts.value = now.value.toString();
    }
  }, 1000);
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
