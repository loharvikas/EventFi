import axios, { InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/',
});

axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        if (config.headers?.JWT === 'true') {
            delete config.headers.JWT;
            const token = Cookies.get('access_token');

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
