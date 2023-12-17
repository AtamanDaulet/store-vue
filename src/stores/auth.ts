import { ref } from "vue";
import { defineStore } from "pinia";

import { useAuthService } from "@/service/auth.service";

import type { Token, UserDTO } from "@/types/user";

const authService = useAuthService();

export const useAuthStore = defineStore('authStore', () => {
  const savedToken = ref<Token | null>(null);
  const userData = ref<UserDTO | null>(null);

  const saveToken = async (token: Token) => {
    localStorage.setItem('token', token.token);

    savedToken.value = token;
    await loadUserData();
  }

  const loadToken = async () => {
    const token = localStorage.getItem('token');
    if (typeof token !== "string") return;

    savedToken.value = {
      token
    }
    await loadUserData();
  }

  const loadUserData = async () => {
    const resultUserInfo = await authService.getUserInfo();
    if (!(resultUserInfo instanceof Error)) {
      userData.value = resultUserInfo;
    }
  }

  const getToken = () => savedToken.value?.token;
  const getUserInfo = () => userData.value;

  const logout = () => {
    localStorage.removeItem('token');
    savedToken.value = null;
    userData.value = null;
  }

  return { saveToken, loadToken, getToken, getUserInfo, logout };
});