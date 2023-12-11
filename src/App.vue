<template>
  <div class="bg-gray-50 h-screen">
    <base-header></base-header>
    <div class="mx-auto max-w-screen-xl mt-8">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseHeader from './components/BaseHeader.vue';
</script>

<style scoped>

  
</style>
