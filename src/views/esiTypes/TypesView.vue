<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { type IMAGE, getImageUrl } from '@/api/eis';
import { processEVEMarkup } from '@/utils/esiUtil';
import getUniverseTypesTypeId from '@/services/getUniverseTypesTypeId';

const type = reactive<{ type_id?: number; name?: string; description?: string }>({});
const route = useRoute();
const router = useRouter();
const typeId = parseInt(route.params.typeid as string);
const icon: IMAGE = {
  category: 'types',
  id: typeId,
};

onMounted(async () => {
  if (typeId) {
    Object.assign(type, await getUniverseTypesTypeId(typeId));
  }
});
</script>

<template>
  <div v-if="$route.params.typeid">
    <img v-if="type.type_id" :src="getImageUrl(icon)" :alt="type.name"/>
    <h1 v-if="type.name">{{ type.name }}</h1>
    <p v-if="type.description" v-html="processEVEMarkup(type.description, router)"></p>
  </div>
</template>
