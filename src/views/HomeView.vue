<template>
  <HelloWorld msg="You did it!" />
  <DatePicker v-model="picked" />
</template>
<script setup lang="ts">
import HelloWorld from '@/views/HelloWorld.vue';
import DatePicker from '@/components/Epoch/DatePicker.vue';
import { ref } from 'vue';

const picked = ref<number>();
</script>
