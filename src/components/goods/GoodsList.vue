<template>
  <div>
    <div>{{ goods }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useGoodsService } from '@/service/goods.service';
import type { Good } from '@/types/goods';

const goodsService = useGoodsService();
const goods = ref<Good[]>([]);

onMounted(async () => {
  goods.value = await goodsService.getAllGoods();
});
</script>

<style scoped></style>
