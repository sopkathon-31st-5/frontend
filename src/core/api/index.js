import axios from 'axios';

const BASE_URL = 'https://server.sodam.me';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export const getShopData = async () => {
  const data = await client.get('/shop/recommend?type=random');
  return data?.data;
};

export const postSignUp = async () => {
  const data = await client.post('/auth/signup');
  return data?.data;
};
