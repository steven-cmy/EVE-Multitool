<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { createESIClient, processEVEMarkup } from '@/services/esi';
const type = reactive<{ type_id?: number; name?: string; description?: string }>({});
const route = useRoute();

onMounted(async () => {
  const esi = await createESIClient();
  const response = await esi.apis.Universe.get_universe_types_type_id({type_id: route.params.typeid, language: 'zh'});
  Object.assign(type,response.obj);
  type.description = processEVEMarkup(type.description || '');
  console.log('Type data:', processEVEMarkup(type.description || '')  );

  console.log('Response:', type);
});
</script>

<template>
  <main>
    <img v-if="type.type_id" :src="`https://images.evetech.net/types/${type.type_id}/icon`" />
    <h1 v-if="type.name">{{ type.name }}</h1>
    <p v-if="type.description" v-html="type.description"></p>
  </main>
</template>
