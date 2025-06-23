<script setup lang="ts">
import { useDarkmodeStore } from '@/stores/DarkmodeStore';
import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

const route = useRoute();

const darkmodeStore = useDarkmodeStore();
const color = computed(() => {
  if (props.dark || darkmodeStore.isDarkmode()) {
    return 'black';
  } else {
    return 'white';
  }
});

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
    redirect: '',
    dark: false,
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
  <RouterLink :to="loginUrl"><img :src="ssoButtonUrl" alt="EVE Online SSO Log-in" /></RouterLink>
</template>

<style scoped></style>
