import axios from 'axios';

const API = 'https://noxer-test.ru/webapp/api/products';

export const getMainPage = () => axios.get(`${API}/on_main`);
export const searchProducts = (search?: string) =>
  axios.post(`${API}/filter?per_page=20&page=1`, { search: search || undefined });