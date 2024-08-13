export interface User {
    _id?: string;
    email?: string;
    isActivated?: boolean;
}

export interface AuthResponse {
    accessToken: string,
    refreshToken: string,
    user: User
}

export interface UserSchema {
    isLoading?: boolean;
    error?: string;
    authData?: User;
    _inited: boolean;
}