import axios from "axios";

import { useAuthStore } from '@/stores/auth';

axios.interceptors.request.use(function (config) {
  const authStore = useAuthStore();

  const token = authStore.getToken();
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }
  return config;
}, (error) => Promise.reject(error));

export default axios;