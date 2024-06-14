import {useState} from 'react';
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from '../../services/fetchProduct';
import {Product, Update} from '../../models/Product';
import {navigationRef} from '../../navigation/RootNavigation';

export const useProductStore = () => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const create = async (data: Product) => {
    setLoading(true);
    try {
      await createProduct(data);
      navigationRef.goBack();
    } catch (err: any) {
      setError(true);
      setLoading(false);
      setMessage(err.response.data.message);
    }
  };

  const update = async (data: Update, id: string) => {
    setLoading(true);
    try {
      const response = await updateProduct(data, id);
      // navigationRef.goBack();
      setMessage(response.message);
    } catch (err: any) {
      setError(true);
      setMessage(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteProd = async (id: string) => {
    setLoading(true);
    try {
      await deleteProduct(id);
      navigationRef.goBack();
    } catch (err: any) {
      setError(true);
      setMessage(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return {error, loading, message, create, update, deleteProd};
};
