<template>
  <ol v-if="items">
    <li v-for="item in items" :key="item">
      <RouterLink :to="{ name: 'types-showinfo', params: { typeid: item } }">{{ item }}</RouterLink>
    </li>
  </ol>
</template>
<script setup lang="ts">
const items = [34, 3898, 44992];
</script>
