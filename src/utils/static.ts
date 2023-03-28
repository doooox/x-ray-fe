import { Route } from "react-router-dom";
import { IRoute } from "../types/navigation.types";


export const ROUTES = {
    WELCOM: "/",
    REGISTER: "/register",
    LOGIN: "/login",
    LOGOUT: "/logout",
    DPRACTICE: "/practices"
}

export const ENDPOINTS = {
    REGISTER: "/auth/register",
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout"
}
export const NAVIGATION_ROUTES: IRoute[] = [
    {
        name: "Welcom",
        path: ROUTES.WELCOM,
        perms: {
            requiredAuth: false,
            guestOnly: true
        }
    },
    {
        name: "Login",
        path: ROUTES.LOGIN,
        perms: {
            requiredAuth: false,
            guestOnly: true,
        }
    },
    {
        name: "Register",
        path: ROUTES.REGISTER,
        perms: {
            requiredAuth: false,
            guestOnly: true
        }
    },
    {
        name: "Logout",
        path: ROUTES.LOGOUT,
        perms: {
            requiredAuth: true,
            guestOnly: false
        }
    },
    {
        name: "Dental practices",
        path: ROUTES.DPRACTICE,
        perms: {
            requiredAuth: true,
            guestOnly: false
        }
    }
]
export type StorageKeys = "user" | "token"

export const DEFAULT_QUERY_OPTIONS = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchIntervalInBackground: false,
            refetchOnReconnect: true,
            refetchOnMount: true,
        },
    },
};