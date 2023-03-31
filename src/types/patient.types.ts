import { IDentalPractice } from "./dentalPractice.type";
import { IDoctor } from "./doctor.types";

export interface IPatientDraft {
    firstName: string,
    lastName: string,
    doctor?: IDoctor,
    dentalPractice?: IDentalPractice
}

export interface IPatient extends IPatientDraft {
    _id: string
}

export interface IAddPatient extends IPatientDraft {
    doctorId: string,
    dentalPracticeId?: string
}