<template>
  <n-popselect
    v-model:value="locale"
    :options="langStore.availableLocales()"
    size="small"
    scrollable
  >
    <n-button circle>
      <template #icon>
        <n-icon :component="Language" />
      </template>
    </n-button>
  </n-popselect>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Language } from '@vicons/tabler';
import { useLanguageStore } from '@/stores/LanguageStore';

const langStore = useLanguageStore();
const locale = ref(langStore.getLocale());

watch(
  locale,
  (newLocale) => {
    langStore.setLocale(newLocale);
  },
  { immediate: true },
);
</script>
