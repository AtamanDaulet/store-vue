<template>
  <div class="flex gap-2 flex-col mx-4 my-2">
    <good-card
      v-for="item in goods"
      :key="item.id"
      :good="item"
    ></good-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useGoodsService } from '@/service/goods.service';
import type { Good } from '@/types/goods';

import GoodCard from './GoodCard.vue';

const goodsService = useGoodsService();
const goods = ref<Good[]>([]);

onMounted(async () => {
  goods.value = await goodsService.getAllGoods();
});
</script>

<style scoped></style>
