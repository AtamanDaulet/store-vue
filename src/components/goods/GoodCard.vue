<template>
  <div>
    <div>{{ good }}</div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useGoodsService } from '@/service/goods.service';
  import type { Good } from '@/types/goods';

  const goodsService = useGoodsService(); 
  const good = ref<Good>();

  onMounted(async () => {    
    good.value = await goodsService.getGood();
  });
</script>

<style scoped></style>
