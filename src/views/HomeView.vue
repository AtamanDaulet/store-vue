<template>
  <div>
    <!-- <h1 class="m-8">Home view</h1> -->
    <!-- <GoodsList></GoodsList> -->
    <!-- <br />
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" /> <br />
      <label for="price">Price</label>
      <input type="number" id="price" v-model.number="price" /> <br />
      <button type="button" @click="postGood">Submit</button>
    </div> -->
    <goods-list></goods-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useGoodsService } from '@/service/goods.service';
import type { Good } from '@/types/goods';
import GoodsList from '@/components/goods/GoodsList.vue';
// import GoodCard from '@/components/goods/GoodCard.vue';

const name = ref<string>('');
const price = ref<number>(0);

const goodsService = useGoodsService();

const postGood = async () => {
  await goodsService.postGood(name.value, price.value);
};
</script>

<style scoped></style>
