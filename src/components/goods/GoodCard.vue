<template>
  <div class="border border-gray-200 rounded-lg shadow py-2 px-4 hover:bg-gray-100">
    <router-link
      :to="{ name: 'good', params: { id: good.id } }"
      class="hover:text-blue-400"
    >
      <h3 class="text-2xl font-bold">{{ props.good.name }}</h3>
    </router-link>
    <span>{{ props.good.price }}$</span>
  </div>
</template>

<script setup lang="ts">
import type { Good } from '@/types/goods';

const props = defineProps<{
  good: Good;
}>();
</script>

<style scoped></style>
