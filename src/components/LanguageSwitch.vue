<template>
  <div class="locale-changer">
    <n-select v-model:value="locale" :options="langStore.availableLocales()" />
  </div>
</template>

<script setup lang="ts">
import { NSelect } from 'naive-ui';
import { ref, watch } from 'vue';
import { useLanguageStore } from '@/stores/LanguageStore';

const langStore = useLanguageStore();
const locale = ref(langStore.getLocale());

watch(locale, (newLocale) => {
  langStore.setLocale(newLocale);
});
</script>
