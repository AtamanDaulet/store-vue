import { ref } from "vue";
import { defineStore } from "pinia";

import type { Token } from "@/types/user";

export const useAuthStore = defineStore('authStore', () => {
  const savedToken = ref<Token>(); 

  const saveToken = (token: Token) => {
    localStorage.setItem('token', token.token);
    localStorage.setItem('userId', token.userId);

    savedToken.value = token;
  }

  const loadToken = () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (typeof token !== "string") return;
    if (typeof userId !== "string") return;

    savedToken.value = {
      token,
      userId
    }
  }
  return { saveToken, loadToken };
});