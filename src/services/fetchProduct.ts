import axios from 'axios';
import {IProduct} from '../interfaces/product.interface';
import {Product, Update} from '../models/Product';
import {URI} from '../utils/constants';

const getProducts = async (): Promise<{data: IProduct[]}> => {
  const response = await axios.get(`${URI}:3002/bp/products`);
  return response.data as {data: IProduct[]};
};

const verification = async (id: string) => {
  const response = await axios.get(
    `${URI}:3002/bp/products/verification/${id}`,
  );
  return response.data;
};

const createProduct = async (data: Product) => {
  const response = await axios.post(`${URI}:3002/bp/products`, data);
  return response.data;
};

const updateProduct = async (data: Update, id: string) => {
  const response = await axios.put(`${URI}:3002/bp/products/${id}`, data);
  return response.data;
};

const deleteProduct = async (id: string) => {
  const response = await axios.delete(`${URI}:3002/bp/products/${id}`);
  return response.data;
};

export {getProducts, verification, createProduct, updateProduct, deleteProduct};
