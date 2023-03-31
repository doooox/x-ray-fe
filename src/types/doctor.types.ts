import { IDentalPractice } from "./dentalPractice.type";
import { IPatient } from "./patient.types";

export interface IDoctorDraft {
    firstName: string,
    lastName: string,
    email: string,
    dentalPractice?: IDentalPractice
    patients?: IPatient[]
}

export interface IDoctor extends IDoctorDraft {
    _id: string
}

export interface IAddDoctor extends IDoctorDraft {
    dentalPracticeId: string,
}