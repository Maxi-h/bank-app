import {useEffect, useState} from 'react';
import {IProduct} from '../../interfaces/product.interface';
import {getProducts} from '../../services/fetchProduct';
import {useFocusEffect} from '@react-navigation/native';
import React from 'react';

export const useProduct = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [productsFiltered, setProductsFiltered] = useState<IProduct[]>([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getProducts();
      setProducts(response.data);
      setProductsFiltered(response.data);
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      // setError(true);
      console.debug(JSON.stringify(err.response));
    }
  };

  const filter = (value: string) => {
    if (value) {
      const data = products.filter(
        product =>
          product.id.toLowerCase().includes(value.toLowerCase()) ||
          product.name.toLowerCase().includes(value.toLowerCase()),
      );
      setProductsFiltered(data);
    } else {
      setProductsFiltered(products);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
      return () => {};
    }, []),
  );

  return {productsFiltered, error, loading, filter};
};
