<template>
  <n-button circle @click="darkmodeStore.toggleDarkmode">
    <template #icon>
      <n-icon v-if="theme === 'dark'" :component="Sun" />
      <n-icon v-else :component="MoonStars" />
    </template>
  </n-button>
</template>

<script setup lang="ts">
import { MoonStars, Sun } from '@vicons/tabler';
import { computed } from 'vue';
import { useDarkmodeStore } from '@/stores/DarkmodeStore';

const darkmodeStore = useDarkmodeStore();
const theme = computed(() => darkmodeStore.Theme);
</script>
