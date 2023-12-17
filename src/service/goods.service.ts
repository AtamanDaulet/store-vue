import axios from '@/service/service';
import type { Good } from '@/types/goods';

const url = 'http://localhost:3000';

export const useGoodsService = () => {
  const convertToGood = (obj: any): Good => {
    return {
      id: obj._id,
      name: obj.name,
      price: obj.price
    };
  };

  const getAllGoods = async (): Promise<Good[]> => {
    const result = await axios.get(`${url}/goods`);
    return result.data.map((obj: any) => convertToGood(obj));
  };
  const getGood = async (id: string): Promise<Good | null> => {
    const result = await axios.get(`${url}/goods/get/${id}`);
    if (!result) return null;
    return convertToGood(result.data);
  };
  const postGood = async (name: string, price: number): Promise<string | Error> => {
    try {
      return await axios.post(`${url}/goods/add`, { name, price });
    } catch (error) {
      return error as Error;
    }
  };
  const deleteGood = async (id: string): Promise<string | Error> => {
    try {
      return await axios.delete(`${url}/goods/delete/${id}`);
    } catch (error) {
      return error as Error;
    }
  };

  return { getAllGoods, getGood, postGood, deleteGood };
};
