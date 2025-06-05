<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

const route = useRoute();

const isDarkMode = ref(window.matchMedia('(prefers-color-scheme: dark)').matches);
const color = computed(() => {
  if (props.dark || isDarkMode.value) {
    return 'black';
  } else {
    return 'white';
  }
});

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => (isDarkMode.value = e.matches));

const ssoButtonUrl = computed(() => {
  return `https://web.ccpgamescdn.com/eveonlineassets/developers/eve-sso-login-${color.value}-${props.size}.png`;
});

const props = withDefaults(
  defineProps<{
    scope?: string;
    redirect?: string;
    dark?: boolean;
    size?: 'large' | 'small';
  }>(),
  {
    scope: 'publicData',
    size: 'large',
  },
);

const loginUrl = computed(() => ({
  name: 'sso-login',
  query: {
    scope: props.scope,
    redirect: props.redirect ?? route.fullPath,
  },
}));
</script>

<template>
  <RouterLink :to="loginUrl"><img :src="ssoButtonUrl" /></RouterLink>
</template>

<style scoped></style>
