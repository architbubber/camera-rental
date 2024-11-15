import axios from 'axios';

const BASE_URL = 'http://localhost:8080/products';

export const fetchProducts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios.post(BASE_URL, product);
  return response.data;
};

export const updateProduct = async (id, product) => {
  const response = await axios.put(`${BASE_URL}/${id}`, product);
  return response.data;
};
