import { Guest } from "./guest";

export interface Event {
    id: number;
    eventName: string;
    eventDate: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zipCode: number;
    country: string;
    guestCount: number;
    contributors?: string[];
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
