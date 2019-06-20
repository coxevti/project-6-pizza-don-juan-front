import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:3333/',
});

Api.interceptors.request.use((configs) => {
  const token = localStorage.getItem('@pizzariaDonJuan:token') || null;
  const headers = { ...configs.headers };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return { ...configs, headers };
});

export default Api;
