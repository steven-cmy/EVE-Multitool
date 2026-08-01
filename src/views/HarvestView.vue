<script setup lang="ts">
import GasHarvest from '@/components/Harvest/GasHarvest.vue';
import MarketOptions from '@/components/Harvest/MarketOptions.vue';
</script>

<template>
  <MarketOptions />
  <GasHarvest :region-id="10000002" />
</template>
