<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import SSOLogin from '@/components/SSOLogin.vue';
import EVExcel from '@/components/icons/IconEvexcel.vue';
import LanguageSwitch from '@/components/LanguageSwitch.vue';
import { computed, ref, watch } from 'vue';
import { darkTheme, lightTheme, type NLocale, type NDateLocale } from 'naive-ui';
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
    const uiLocale = langStore.getUILocales()[newLocale];
    if (uiLocale) {
      loc.value = uiLocale.locale as NLocale;
      dLoc.value = uiLocale.dateLocale as NDateLocale;
    } else {
      loc.value = null;
      dLoc.value = null;
    }
  },
  { immediate: true },
);
</script>

<template>
  <n-config-provider :theme="theme" :locale="loc" :date-locale="dLoc">
    <n-layout position="absolute">
      <n-layout-header bordered>
        <n-flex justify="space-between" align="center" style="height: 100%" :wrap="false">
          <n-flex align="center" style="height: 100%" :wrap="false">
            <RouterLink to="/" style="height: 100%; padding: 0"><EVExcel /></RouterLink>
            <nav>
              <RouterLink :to="{ name: 'home' }">{{ $t('test') }}</RouterLink>
              <RouterLink :to="{ name: 'categories' }">{{ $t('types.category') }}</RouterLink>
              <RouterLink :to="{ name: 'epoch' }">{{ $t('epoch.title') }}</RouterLink>
              <RouterLink :to="{ name: 'harvest' }">{{ $t('harvest.title') }}</RouterLink>
              <RouterLink :to="{ name: 'rdf' }">{{ $t('rdf.title') }}</RouterLink>
            </nav>
          </n-flex>

          <n-flex justify="end" align="center" style="height: 100%" :wrap="false">
            <SSOLogin />
            <LanguageSwitch />
            <LightSwitch />
          </n-flex>
        </n-flex>
      </n-layout-header>
      <n-layout id="main" position="absolute" content-style="padding: 5vw;">
        <RouterView />
        <n-back-top :bottom="70" />
      </n-layout>
      <n-layout-footer bordered position="absolute">
        <n-flex justify="end" align="center" style="height: 100%" :wrap="false">
          <RouterLink to="/about">About</RouterLink>
        </n-flex>
      </n-layout-footer>
    </n-layout>
    <n-global-style />
  </n-config-provider>
</template>

<style>
:root {
  --header-height: clamp(50px, 6vw, 100px);
  --footer-height: clamp(50px, 2vw, 100px);
}
</style>

<style scoped>
.n-config-provider {
  font-family: 'Eve Sans Neue', sans-serif;
}

.n-layout-header {
  height: var(--header-height);
  padding: 1vw;
}

.n-layout#main {
  top: var(--header-height);
  bottom: var(--footer-height);
}

.n-layout-footer {
  height: var(--footer-height);
  padding: 1vh;
}
</style>
