<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import SSOLogin from '@/components/SSOLogin.vue';
import EVExcel from '@/components/icons/IconEvexcel.vue';
import LanguageSwitch from '@/components/LanguageSwitch.vue';
import { computed, ref, watch } from 'vue';
import {
  NConfigProvider,
  NGlobalStyle,
  darkTheme,
  lightTheme,
  NLayout,
  NLayoutHeader,
  NLayoutFooter,
  NFlex,
  NGi,
  NGrid,
  type NLocale,
  type NDateLocale,
} from 'naive-ui';
import LightSwitch from '@/components/LightSwitch.vue';
import { useDarkmodeStore } from '@/stores/DarkmodeStore';
import { useLanguageStore } from '@/stores/LanguageStore';

const langStore = useLanguageStore();
const darkmodeStore = useDarkmodeStore();
const theme = computed(() => (darkmodeStore.isDarkmode() ? darkTheme : lightTheme));
const loc = ref<NLocale | null>(null);
const dLoc = ref<NDateLocale | null>(null);

watch(
  () => langStore.getLocale(),
  (newLocale) => {
    const { locale, dateLocale } = langStore.getUILocales()[newLocale];
    loc.value = locale as NLocale;
    dLoc.value = dateLocale as NDateLocale;
  },
  { immediate: true },
);
</script>

<template>
  <n-config-provider :theme="theme" :locale="loc" :date-locale="dLoc">
    <n-layout position="absolute">
      <n-layout-header bordered>
        <n-grid x-gap="12" cols="12" item-responsive responsive="screen">
          <n-gi span="0 m:1 l:2">
            <EVExcel size="calc(var(--header-height) - 2 * var(--header-padding))" />
          </n-gi>
          <n-gi span="6 m:6 l:5">
            <nav>
              <RouterLink to="/">Home</RouterLink>
              <RouterLink :to="{ name: 'types-list' }">Types</RouterLink>
            </nav>
          </n-gi>
          <n-gi span="6 m:5 l:5">
            <n-flex justify="end" align="center">
              <SSOLogin />
              <LanguageSwitch />
              <LightSwitch />
            </n-flex>
          </n-gi>
        </n-grid>
      </n-layout-header>
      <n-layout id="main" position="absolute">
        <RouterView />
      </n-layout>
      <n-layout-footer bordered position="absolute">
        <RouterLink to="/about">About</RouterLink>
      </n-layout-footer>
    </n-layout>
    <n-global-style />
  </n-config-provider>
</template>

<style>
:root {
  --header-height: clamp(50px, 8vw, 100px);
  --header-padding: 1vw;
  --footer-height: clamp(50px, 8vw, 100px);
}
</style>

<style scoped>
.n-layout {
  font-family: 'Eve Sans Neue', sans-serif;
}

.n-layout-header {
  height: var(--header-height);
  padding: var(--header-padding);
}

.n-layout#main {
  top: var(--header-height);
  bottom: var(--footer-height);
}

.n-layout-footer {
  height: var(--footer-height);
  padding: 1vh;
  font-family:
    Triglavian,
    Eve Sans Neue,
    sans-serif;
}
</style>
