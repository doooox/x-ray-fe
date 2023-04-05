import { type } from "os"

export type ISearchDentalPractice = {
    _id: string,
    name: string,
    address: string
}

export type ISearchDoctor = {
    _id: string,
    firstName: string,
    lastName: string
}

export type ISearchPatient = {
    _id: string,
    firstName: string,
    lastName: string
}