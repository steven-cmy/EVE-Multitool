<template>
  <n-breadcrumb>
    <n-breadcrumb-item
      ><RouterLink :to="{ name: 'types-list' }">Types</RouterLink></n-breadcrumb-item
    >
    <n-breadcrumb-item v-if="$route.params.typeid">{{ $route.params.typeid }}</n-breadcrumb-item>
  </n-breadcrumb>
  <RouterView />
</template>
<script setup lang="ts">
import { NBreadcrumb, NBreadcrumbItem } from 'naive-ui';
</script>
