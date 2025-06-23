<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './views/HelloWorld.vue';
import SSOLogin from './components/SSOLogin.vue';
import EVExcel from './components/icons/IconEvexcel.vue';
import EOL from './components/icons/IconEOLAnimated.vue';
import LanguageSwitch from './components/LanguageSwitch.vue';
import { computed } from 'vue';
import { NConfigProvider, darkTheme, lightTheme } from 'naive-ui';
import LightSwitch from './components/LightSwitch.vue';
import { useDarkmodeStore } from '@/stores/DarkmodeStore';

const darkmodeStore = useDarkmodeStore();
const theme = computed(() => (darkmodeStore.isDarkmode() ? darkTheme : lightTheme));
</script>

<template>
  <n-config-provider :theme="theme">
    <header>
      <EVExcel />
      <EOL />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink :to="{ name: 'types-list' }">Types</RouterLink>
        </nav>

        <SSOLogin />
        <LanguageSwitch />
        <LightSwitch />
      </div>
    </header>

    <RouterView />
  </n-config-provider>
</template>

<style scoped>
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
}
</style>
