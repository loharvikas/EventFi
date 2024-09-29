import { UserLoginPayload, UserRegisterPayload } from "../types/user";
import { axiosInstance } from "./axios";


const getEvents = () => axiosInstance.get('events/',  { });

export const eventAPI = {
    getEvents,
}
