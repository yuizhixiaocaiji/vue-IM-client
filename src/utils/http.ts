import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config;
});

axios.interceptors.response.use((res: AxiosResponse) => {
  if (res.data.code === -1) {
    return Promise.reject(res.data.message);
  }
  return res.data.data;
});

export default axios;
