// src/auth.ts

import type { User } from "$lib/types";

export function getToken(): string | null {
    return localStorage.getItem("JWT") || null;
}

export function clearToken() {
    localStorage.removeItem("JWT");
}

export function getUserId(): number | null {
    let user: string | User = localStorage.getItem("user");
    if (!user) return null;
    user = JSON.parse(user);
    return (user as User).id;
}

export function getUser(): User | null {
    let user: string | User = localStorage.getItem("user");
    if (!user) return null;
    user = JSON.parse(user);
    return user as User;
}
