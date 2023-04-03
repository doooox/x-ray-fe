import { IRoute } from "../types/navigation.types";


export const ROUTES = {
    WELCOM: "/",
    REGISTER: "/register",
    LOGIN: "/login",
    LOGOUT: "/logout",
    DPRACTICE: "/dpractice",
    SINGLEDENTALPRACTICE: "/dpractice/:_id",
    ADDDENTALPRACTICE: "/dpractice/add",
    DOCTOR: "/doctor",
    SINGLEDOCTOR: "/doctor/:_id",
    ADDDOCTOR: "/doctor/create/:_id",
    PATIENT: "/patient",
    SINGLEPATIENT: "/patient/:_id",
    ADDPATIENT: "/patient/create/:_id",
    XRAY: "/xray",
    SINGLEXRAYIMAGE: "/xray/:_id",
}

export const ENDPOINTS = {
    REGISTER: "/auth/register",
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    DENTALPRACTICES: "/dpractice",
    ADDDENTALPRACTICE: "/dpractice/create",
    DOCTOR: "/doctor",
    ADDDOCTOR: "/doctor/create",
    PATIENT: "/patient",
    ADDPATIENT: "/patient/create",
    ADDXRAYIMAGE: "/xray/add",
    GETXRAY: "/xray",
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
    },
    {
        name: "Single Dental practices",
        path: ROUTES.DOCTOR,
        perms: {
            requiredAuth: true,
            guestOnly: false
        }
    },
    {
        name: "Add Dental practices",
        path: ROUTES.ADDDENTALPRACTICE,
        perms: {
            requiredAuth: true,
            guestOnly: false
        }
    },
    {
        name: "Single Doctor",
        path: ROUTES.SINGLEDOCTOR,
        perms: {
            requiredAuth: true,
            guestOnly: false
        }
    },
    {
        name: "Add Doctor",
        path: ROUTES.ADDDOCTOR,
        perms: {
            requiredAuth: true,
            guestOnly: false
        }
    },
    {
        name: "Single Patient",
        path: ROUTES.SINGLEPATIENT,
        perms: {
            requiredAuth: true,
            guestOnly: false
        }
    },
    {
        name: "Add Patient",
        path: ROUTES.ADDPATIENT,
        perms: {
            requiredAuth: true,
            guestOnly: false
        }
    },
    {
        name: "Add X-ray-image",
        path: ROUTES.SINGLEXRAYIMAGE,
        perms: {
            requiredAuth: true,
            guestOnly: false
        }
    },
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

export const QUERY_KEYS = {
    DENTALPRACTISEC: "dpractice",
    SINGLEDENTALPRACTICE: "dpracticeSingle",
    DOCTOR: "doctor",
    PATIENT: "patient",
    XRAY: "xray"
}