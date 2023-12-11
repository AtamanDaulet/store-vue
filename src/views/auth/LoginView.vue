<template>
  <div class="flex items-center justify-center">
    <div
      class="flex flex-col gap-8 items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-4 px-8"
    >
      <h3 class="text-2xl font-bold">Авторизация</h3>
      <div class="flex flex-col gap-4">
        <div class="flex items-center justify-between gap-4">
          <label for="email" class="text-lg">E-mail:</label>
          <input
            v-model="email"
            id="email"
            type="text"
            class="rounded-lg px-4 py-1 border-gray-200 border-2 w-60"
            placeholder="doe@example.com"
          />
        </div>
        <div class="flex items-center justify-between gap-4">
          <label for="password" class="text-lg">Password:</label>
          <input
            v-model="password"
            id="password"
            type="password"
            class="rounded-lg px-4 py-1 border-gray-200 border-2 w-60"
          />
        </div>
      </div>
      <button
        @click="logIn"
        class="bg-blue-600 hover:bg-blue-800 py-2 px-8 rounded-lg text-white font-bold"
      >
        Log In
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthService } from '@/service/auth.service';
import { useAuthStore } from '@/stores/auth';
import type { Token } from '@/types/user';

const email = ref<string>('');
const password = ref<string>('');

const authService = useAuthService();
const authStore = useAuthStore();

const logIn = async () => {
  const token: Token | Error = await authService.logIn(email.value, password.value);
  authStore.saveToken(token as Token);
};
</script>

<style scoped></style>
