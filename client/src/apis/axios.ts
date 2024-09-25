import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/',
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    
    if (config.headers?.JWT === 'true') {
      const token = Cookies.get('jwt_token');
      
      if (token && config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

