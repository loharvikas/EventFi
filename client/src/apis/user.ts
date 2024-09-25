import { UserLoginPayload, UserRegisterPayload } from "../types/user";
import { axiosInstance } from "./axios";


const registerUser = (registerUserDetails: UserRegisterPayload) => axiosInstance.post('user/register/', registerUserDetails, { });

const loginUser = (loginUserDetails: UserLoginPayload) => axiosInstance.post('user/login/', loginUserDetails, {});


export const userApi = {
    registerUser,
    loginUser,
}

