<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

const route = useRoute()

const isDarkMode = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)

window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', e => isDarkMode.value = e.matches)

const ssoButtonUrl = computed(() => {
  return `https://web.ccpgamescdn.com/eveonlineassets/developers/eve-sso-login-${isDarkMode.value ? "black" : "white"}-large.png`
})

const props = withDefaults(defineProps<{
  scope?: string,
  redirect?: string
}>(), {
  scope: "publicData"
})

const loginUrl = computed(() => ({
  name: 'sso-login',
  query: {
    scope: props.scope,
    redirect: props.redirect ?? route.fullPath
  }
}))
</script>

<template>
  <RouterLink :to="loginUrl"><img :src="ssoButtonUrl" /></RouterLink>
</template>

<style scoped></style>
