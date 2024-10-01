import { CreateEventPayload, UpdateEventPayload } from '../types/event';
import { axiosInstance } from './axios';

const getEvents = () => axiosInstance.get('events/', { headers: { JWT: 'true' } });

const createEvent = (event: CreateEventPayload) =>
    axiosInstance.post('events/', event, { headers: { JWT: 'true' } });

const getTopContributors = (event_id: string) =>
    axiosInstance.get(`events/${event_id}/top_contributor`, {
        headers: { JWT: 'true' },
    });

const getContributions = (event_id: string) =>
    axiosInstance.get(`events/${event_id}/contributions`, {
        headers: { JWT: 'true' },
    });

const getEventDetail = (event_id: string) =>
    axiosInstance.get(`events/${event_id}`, { headers: { JWT: 'true' } });

const updateEvent = (event: UpdateEventPayload) =>
    axiosInstance.put(`events/${event.id}/`, event, {
        headers: { JWT: 'true' },
    });

const deleteEvent = (event_id: string) =>
    axiosInstance.delete(`events/${event_id}/`, { headers: { JWT: 'true' } });

const getEventStat = (event_id: string) =>
    axiosInstance.get(`events/${event_id}/stats`, { headers: { JWT: 'true' } });

export const eventAPI = {
    getEvents,
    createEvent,
    getTopContributors,
    getContributions,
    getEventDetail,
    updateEvent,
    deleteEvent,
    getEventStat,
};
