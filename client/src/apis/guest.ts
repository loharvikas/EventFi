import { AddContributionPayload, CreateGuestPayload } from "../types/guest";
import { axiosInstance } from "./axios";


const getGuests = (event_id:string) => axiosInstance.get(`events/${event_id}/guests`,  { headers: { JWT: 'true' }  });

const createGuest = (event_id:string, payload: CreateGuestPayload) => axiosInstance.post(`events/${event_id}/guests/`, payload, { headers: { JWT: 'true' } });

const addContribution = (event_id:string, guest_id:string, payload: AddContributionPayload) => axiosInstance.post(`events/${event_id}/guests/${guest_id}/`, payload, { headers: { JWT: 'true' } });


export const guestAPI = {
    getGuests,
    createGuest,
    addContribution
}
