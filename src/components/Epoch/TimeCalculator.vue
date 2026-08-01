<template>
  <n-flex align="center">
    <n-form ref="formRef" inline :label-width="80" :model="formValue">
      <n-form-item v-for="value in values" :key="value" :path="value">
        <n-input-number
          v-model:value="formValue[value]"
          :min="0"
          :precision="0"
          :show-button="false"
          style="min-width: 100px"
        >
          <template #suffix>
            {{ $t(`epoch.calc.${value}`) }}
          </template>
        </n-input-number>
      </n-form-item>
      <n-form-item>
        <n-button-group>
          <n-button @click="plus(true)">
            <template #icon>
              <n-icon><Minus /></n-icon>
            </template>
          </n-button>
          <n-button @click="plus()">
            <template #icon>
              <n-icon><Plus /></n-icon>
            </template>
          </n-button>
        </n-button-group>
      </n-form-item>
    </n-form>
  </n-flex>
</template>
<script setup lang="ts">
import type { FormInst } from 'naive-ui';
import { ref } from 'vue';
import { Plus, Minus } from '@vicons/tabler';
import { useRouter } from 'vue-router';

const { timestamp } = defineProps({
  timestamp: {
    type: String,
    required: true,
  },
});

const router = useRouter();
const formRef = ref<FormInst | null>(null);
const values = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'] as const;

type TimeUnit = (typeof values)[number];
type FormValue = Record<TimeUnit, number>;

const formValue = ref<FormValue>(Object.fromEntries(values.map((key) => [key, 0])) as FormValue);

function plus(minus: boolean = false) {
  const delta: number =
    formValue.value.year * 31556926 +
    formValue.value.month * 2629743 +
    formValue.value.week * 604800 +
    formValue.value.day * 86400 +
    formValue.value.hour * 3600 +
    formValue.value.minute * 60 +
    formValue.value.second;
  router.push({
    name: 'epoch',
    params: {
      timestamp: (Math.floor(parseInt(timestamp) / 1000) + (minus ? -delta : delta)).toString(),
    },
  });
}
</script>
<style lang="css" scoped>
.n-input-number {
  width: 50px;
}
</style>
