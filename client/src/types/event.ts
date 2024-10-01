import { Guest } from './guest';

export interface Event {
    id: string;
    name: string;
    date: string;
    address: string;
    address_line2?: string;
    city: string;
    state: string;
    zip_code: string;
    country: string;
}

export interface CreateEventPayload {
    name: string;
    date: string;
    address: string;
    address_line2?: string;
    city: string;
    state: string;
    zip_code: string;
    country: string;
}

export interface UpdateEventPayload {
    name?: string;
    date?: string;
    address?: string;
    address_line2?: string;
    city?: string;
    state?: string;
    zip_code?: string;
    country?: string;
    id?: string;
}

export interface EventStat {
    total_contribution: number;
    average_contribution: number;
}
