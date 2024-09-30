
export interface Guest {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    event_id: number;
}

export interface CreateGuestPayload {
    name: string;
    email: string;
    phone_number: string;
}

export interface AddContributionPayload {
    amount: number;
}

export interface Contribution {
    id: number;
    guest: Guest;
    event:Event;
    amount: number;
    data:string;
    created_on: string;
}