import { IDoctor } from "./doctor.types";

export interface IDentalPracticeDraft {
    name: string,
    address: string,
    doctors: IDoctor[]
}

export interface IDentalPractice extends IDentalPracticeDraft {
    _id: string
}