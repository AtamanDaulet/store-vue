<template>
  <div class="bg-gray-50 h-screen">
    <base-header></base-header>
    <div class="mx-auto max-w-screen-xl mt-8">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import BaseHeader from './components/BaseHeader.vue';

import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

onMounted(async () => {
  await authStore.loadToken();
})
</script>

<style scoped></style>
