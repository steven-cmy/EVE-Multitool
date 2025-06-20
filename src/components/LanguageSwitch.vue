<template>
  <div class="locale-changer">
    <n-select v-model:value="locale" :options="locales" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { NSelect } from 'naive-ui';

const i18n = useI18n();
const { availableLocales } = i18n;
import { ref, watch } from 'vue';

const locale = ref(i18n.locale.value);

const locales = computed(() => {
  return availableLocales.map((loc) => ({
    value: loc,
    label: (i18n.messages.value[loc]?.languageName || loc) as string,
  }));
});

watch(locale, (newLocale) => {
  i18n.locale.value = newLocale;
  localStorage.setItem('locale', newLocale);
});

</script>
