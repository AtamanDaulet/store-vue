import axios from 'axios';

import type { Token } from '@/types/user';

const url = 'http://localhost:3000/auth';

export const useAuthService = () => {
  const logIn = async (email: string, password: string): Promise<Token | Error> => {
    try {
      return await axios.post(`${url}/login`, { email, password });
    } catch (error) {
      return error as Error;
    }
  };

  return { logIn };
};
