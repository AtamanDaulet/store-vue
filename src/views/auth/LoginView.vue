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
        <div v-if="errorMessage" class="flex items-center bg-red-400 border-red-700 border-2 rounded-lg px-4 py-2 text-white">
          <span class="font-bold">{{ errorMessage }}</span>
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
import { useRouter } from 'vue-router';
import { useAuthService } from '@/service/auth.service';
import { useAuthStore } from '@/stores/auth';
import type { TokenDTO } from '@/types/user';

const email = ref<string>('');
const password = ref<string>('');

const router = useRouter();

const authService = useAuthService();
const authStore = useAuthStore();

const errorMessage = ref<string>('');

const logIn = async () => {
  const token: TokenDTO | Error = await authService.logIn(email.value, password.value);

  if (token instanceof Error) {
    alert(token.message);
    return;
  }

  switch (token.status) {
    case 0:
      errorMessage.value = '';
      if (token?.data) { 
        authStore.saveToken(token.data);
      }
      router.push({ name: 'home' });
      break;
    case 1:
      errorMessage.value = 'Не верный логин или пароль';
      break;
    case 2:
      errorMessage.value = 'Пользователь заблокирован';
      break;
  }
};
</script>

<style scoped></style>
