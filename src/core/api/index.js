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

export const postSignUp = async (email, password) => {
  const data = await client.post('/auth/signup', {
    email,
    name: '김김김',
    nickname: '김13',
    password,
    passwordConfirm: password,
    themePreference: ['힙한', '모던한', '아기자기한'],
  });
  console.log('회원가입 결과 데이터', data);
  return data?.data;
};
