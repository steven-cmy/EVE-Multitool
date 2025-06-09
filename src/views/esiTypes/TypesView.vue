<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { UniverseApi, Configuration } from '@/api/esi';
import { useRoute, useRouter } from 'vue-router';
import { processEVEMarkup } from '@/utils/esiUtil';

const type = reactive<{ type_id?: number; name?: string; description?: string }>({});
const route = useRoute();
const router = useRouter();
const configuration = new Configuration();
const apiInstance = new UniverseApi(configuration);

onMounted(async () => {
  if (route.params.typeid) {
    const { status, data } = await apiInstance.getUniverseTypesTypeId(
      parseInt(route.params.typeid as string),
      (localStorage.getItem('locale') || 'en') as
        | 'en'
        | 'en-us'
        | 'de'
        | 'fr'
        | 'ja'
        | 'ru'
        | 'zh'
        | 'ko'
        | 'es',
    );
    console.log(status, data);
    Object.assign(type, data);
  }
});
</script>

<template>
  <main v-if="$route.params.typeid">
    <img v-if="type.type_id" :src="`https://images.evetech.net/types/${type.type_id}/icon`" />
    <h1 v-if="type.name">{{ type.name }}</h1>
    <p v-if="type.description" v-html="processEVEMarkup(type.description, router)"></p>
  </main>
</template>
