import axios from '@/service/service';

import type { TokenDTO, UserDTO } from '@/types/user';

const MAIN_URL = 'http://localhost:3000';
const AUTH_URL = MAIN_URL + '/auth';

export const useAuthService = () => {
  const logIn = async (email: string, password: string): Promise<TokenDTO | Error> => {
    try {
      const result = await axios.post(`${AUTH_URL}/login`, { email, password });
      return result.data;
    } catch (error) {
      return error as Error;
    }
  };

  const getUserInfo = async (): Promise<UserDTO | Error> => {
    try {
      const result = await axios.get(`${MAIN_URL}/get_user_info`);
      return result.data;
    } catch (e) {
      return e as Error;
    }
  }

  return { logIn, getUserInfo };
};
