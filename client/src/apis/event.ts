import { CreateEventPayload } from "../types/event";
import { axiosInstance } from "./axios";


const getEvents = () => axiosInstance.get('events/',  { });

const createEvent = (event: CreateEventPayload) => axiosInstance.post('events/', event, { headers: { JWT: 'true' } });

const getTopContributors = (event_id:string) => axiosInstance.get(`events/${event_id}/top_contributor`, { headers: { JWT: 'true' } });

const getContributions = (event_id:string) => axiosInstance.get(`events/${event_id}/contributions`, { headers: { JWT: 'true' } });


export const eventAPI = {
    getEvents,
    createEvent,
    getTopContributors,
    getContributions
}
