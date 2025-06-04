<script setup lang="ts">
import { useTokenStore } from '@/stores/sso-token';
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const tokenStore = useTokenStore()

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
  scope: "publicData",
})

const loginUrl = ref('')
loginUrl.value = await tokenStore.generateAuthUrl(props.scope, props.redirect || route.fullPath)

</script>

<template>
  <a :href="loginUrl"><img :src="ssoButtonUrl" /></a>
</template>

<style scoped></style>
