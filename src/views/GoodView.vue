<template>
  <section class="flex justify-center gap-2 mx-4 my-2 h-96">
    <div class="mx-2 w-2/3 ">
      <div class="text-2xl font-bold pl-2">{{ good?.name }}</div>
      <div class="flex h-full gap-2">
        <div class="w-2/3 bg-slate-400 ">Images</div>
        <div class="w-1/2 bg-slate-300">Description 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, tempora?
        </div>
      </div>

    </div>
    <div class="mx-2  w-1/3 flex flex-col justify-evenly">
      <div class="text-2xl text-center">{{ good?.price }} $</div>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >Add to basket</button>
    </div>
    
  </section>
</template>

<script setup lang="ts">
import type { Good } from '@/types/goods';
import { useGoodsService } from '@/service/goods.service';
import { ref, onMounted } from 'vue';

const props = defineProps<{
  id:  Good["id"];}
  >();

const {getGood} = useGoodsService();

const good = ref<Good| null>(null);
 
onMounted(async () => {
  good.value = await getGood(props.id);
});

  

</script>

<style scoped>

</style>