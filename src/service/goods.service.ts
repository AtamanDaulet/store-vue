import axios from 'axios';
import type { Good } from '@/types/goods';

const url  = 'http://localhost:3000';

export const useGoodsService = () => {
  const getAllGoods = async (): Promise<Good[]> => {
    const result = await axios.get(`${url}/goods`);
    return result.data as Good[];
  };
  const getGood = async (): Promise<Good> => {
    const result = await axios.get(`${url}/goods/1`);
    return result.data as Good;
  };
  const postGood = async (name:string, price:number): Promise<string | Error> => {
    try {
      return await axios.post(`${url}/goods/add`, {name, price});      
    } catch (error) {
      return error as Error;
    }
  };
  const deleteGood = async (id:string): Promise<string | Error> => {
    try {
      return await axios.delete(`${url}/goods/delete/${id}`);      
    } catch (error) {
      return error as Error;
    }
  };

  return { getAllGoods, getGood, postGood , deleteGood};
};
