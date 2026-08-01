<template>
  <n-popover>
    <template #trigger>
      <n-button text>
        <template #icon>
          <NIcon>
            <Code />
          </NIcon>
        </template>
        {{ $t('epoch.copyDiscord') }}
      </n-button>
    </template>
    <n-flex v-for="format in discordTimestampFormats" :key="format.code">
      <n-button text icon-placement="right" @click="discordCopy(format.code)">
        <n-time :time="parseInt(timestamp)" :to="now" type="relative" v-if="format.code === 'R'" />
        <n-time :time="parseInt(timestamp)" :format="format.format" v-else />
        <template #icon>
          <NIcon>
            <Copy />
          </NIcon>
        </template>
      </n-button>
    </n-flex>
  </n-popover>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { Code, Copy } from '@vicons/tabler';

const now = ref<number>(Date.now());
const timer = ref<number>();

const { timestamp } = defineProps({
  timestamp: {
    type: String,
    required: true,
  },
});
const discordTimestampFormats = [
  { code: 't', format: 'HH:mm' },
  { code: 'T', format: 'HH:mm:ss' },
  { code: 'd', format: 'P' },
  { code: 'D', format: 'PP' },
  { code: 'f', format: 'PP HH:mm' },
  { code: 'F', format: 'PPPP HH:mm' },
  { code: 'R', format: 'relative' },
];
function discordCopy(style: string) {
  navigator.clipboard.writeText(
    `<t:${Math.floor(parseInt(timestamp) / 1000).toString()}:${style}>`,
  );
}

onMounted(() => {
  timer.value = setInterval(() => {
    now.value = Date.now();
  }, 1000);
});

onUnmounted(() => {
  if (timer.value) {
    clearInterval(timer.value);
  }
});
</script>
