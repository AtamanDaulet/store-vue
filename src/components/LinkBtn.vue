<template>
  <div>
    <router-link v-bind="$attrs" :to="props.to"
      class="text-gray-800 dark:text-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
      >
      <slot></slot>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

const props = defineProps<{
  to: RouteLocationRaw;
}>();
</script>

<style scoped>

</style>