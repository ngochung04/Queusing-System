type Nullable<T> = T | null;
export interface userInfo {
    fullName: string,
    userName: string,
    phoneNumber: string,
    email: string,
    password: string,
    role: number,
    avatar?: string,
}


export interface sitemap {
    currentLocation: string,
    stack: string[];
}