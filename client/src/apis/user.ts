import { PasswordForgetPayload, UserLoginPayload, UserRegisterPayload } from '../types/user';
import { axiosInstance } from './axios';

const registerUser = (registerUserDetails: UserRegisterPayload) =>
    axiosInstance.post('user/register/', registerUserDetails, {});

const loginUser = (loginUserDetails: UserLoginPayload) =>
    axiosInstance.post('user/login/', loginUserDetails, {});

const forgetPassword = (loginUserDetails: PasswordForgetPayload) =>
    axiosInstance.post('user/forget-password/', loginUserDetails, {});

const getMyContributions = () =>
    axiosInstance.get('user/my-contributions/', {headers: {JWT: true}});


export const userApi = {
    registerUser,
    loginUser,
    forgetPassword,
    getMyContributions
};
