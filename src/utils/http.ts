import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import {AXIOS_TIMEOUT} from "@/config";

const request = axios.create({
  timeout: AXIOS_TIMEOUT,
})

request.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config;
});

request.interceptors.response.use((res: AxiosResponse) => {
  if (res.data.code === -1) {
    return Promise.reject(res.data.message);
  }

  return res.data.data ? res.data.data : res.data;
});

export default request;
