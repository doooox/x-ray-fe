import { IPatient } from "./patient.types";

export interface IXray extends IXrayDraft {
    _id: string,

}

export interface IXrayDraft {
    xRay: string
    patient?: IPatient
}
export interface IAddXRay extends IXrayDraft {
    patientId: string
}