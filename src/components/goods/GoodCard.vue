<template>
  <div
    class="flex justify-between border border-gray-200 rounded-lg shadow py-2 px-4 hover:bg-gray-100"
  >
    <div>
      <router-link :to="{ name: 'good', params: { id: good.id } }" class="hover:text-blue-400">
        <h3 class="text-2xl font-bold">{{ props.good.name }}</h3>
      </router-link>
      <span>{{ props.good.price }}$</span>
    </div>
    <custom-btn v-if="getItemFormBasket(props.good.id) == undefined" @click="addToBasket" class="hover:bg-gray-200">Добавить в корзину</custom-btn>
    <div v-else class="flex items-center gap-2">
      <custom-btn @click="removeItemAmount(props.good.id)" class="hover:bg-gray-200">-</custom-btn>
      <span>{{ getItemFormBasket(props.good.id)?.amount }}</span>
      <custom-btn @click="addItemAmount(props.good.id)" class="hover:bg-gray-200">+</custom-btn>
    </div>
 </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Good } from '@/types/goods';

import CustomBtn from '@/components/CustomBtn.vue';

const props = defineProps<{
  good: Good;
}>();

interface BasketItem {
  item_id: string;
  amount: number;
}

const basket = ref<BasketItem[]>([]);

onMounted(() => {
  try {
    const basketString = localStorage.getItem('basket');
    if (basketString) {
      basket.value = JSON.parse(basketString);
      if (!Array.isArray(basket.value)) {
        basket.value = [];
      }
    }
  } catch {
    basket.value = [];
  }
});

const addToBasket = () => {
  basket.value.push({
    item_id: props.good.id,
    amount: 1
  });
  localStorage.setItem('basket', JSON.stringify(basket.value));
};

const getItemFormBasket = (item_id: string) => {
  return basket.value.find((item) => item.item_id == item_id);
}

const removeItemAmount = (item_id: string) => {
  basket.value.forEach((item) => {
    if (item.item_id == item_id) {
      item.amount--;
    }
  });
  const item = getItemFormBasket(item_id);
  if (Number(item?.amount) <= 0) {
    basket.value = basket.value.filter((item) => item.item_id != item_id);
  }
  localStorage.setItem('basket', JSON.stringify(basket.value));
}

const addItemAmount = (item_id: string) => {
  basket.value.forEach((item) => {
    if (item.item_id == item_id) {
      item.amount++;
    }
  });
  localStorage.setItem('basket', JSON.stringify(basket.value));
}
</script>

<style scoped></style>
