<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import SSOLogin from '@/components/SSOLogin.vue';
import EVExcel from '@/components/icons/IconEvexcel.vue';
import LanguageSwitch from '@/components/LanguageSwitch.vue';
import { computed } from 'vue';
import {
  NConfigProvider,
  NGlobalStyle,
  darkTheme,
  lightTheme,
  NLayout,
  NLayoutHeader,
  NLayoutFooter,
  NFlex,
  NImage,
} from 'naive-ui';
import LightSwitch from '@/components/LightSwitch.vue';
import { useDarkmodeStore } from '@/stores/DarkmodeStore';

const darkmodeStore = useDarkmodeStore();
const theme = computed(() => (darkmodeStore.isDarkmode() ? darkTheme : lightTheme));
</script>

<template>
  <n-config-provider :theme="theme">
    <n-layout position="absolute">
      <n-layout-header bordered>
        <EVExcel />
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink :to="{ name: 'types-list' }">Types</RouterLink><SSOLogin />
        </nav>
        <SSOLogin />
        <LanguageSwitch />
        <LightSwitch />
      </n-layout-header>
      <n-layout id="main" position="absolute">
        <RouterView />
      </n-layout>
      <n-layout-footer bordered position="absolute" style="height: 64px; padding: 24px">
        城府路
      </n-layout-footer>
    </n-layout>
    <n-global-style />
  </n-config-provider>
</template>

<style>
:root {
  --header-height: clamp(50px, 8vh, 100px);
}
</style>

<style scoped>
.n-layout-header {
  height: var(--header-height);
  padding: 1vh;
}

.n-layout#main {
  top: var(--header-height);
}

/* Commented out styles
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
