export interface User {
    id: number;
    email: string;
    phone_number: string;
    created_at: string;
    updated_at: string;
}

export interface UserRegisterPayload {
    email: string;
    password: string;
    phone_number: string;
}

export interface UserRegisterResponse {
    user: User;
}

export interface UserLoginPayload {
    email: string;
    password: string;
}

export interface UserLoginRespone {
    access: string;
    refresh: string;
}

export interface PasswordForgetPayload {
    email: string;
    password: string;
}