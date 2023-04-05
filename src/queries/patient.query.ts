import { useQuery } from "@tanstack/react-query";
import { IPatient } from "../types/patient.types";
import { QUERY_KEYS } from "../utils/static";
import { patientService } from "../services/X-ray/PatientService";
import { ISearchPatient } from "../types/search.type";


export const useGetPatientsQuery = () => {
    return useQuery<IPatient[]>([QUERY_KEYS.PATIENTS], async () => await patientService.getAllPatiens())
}

export const useGetPatientQuery = (_id: string) => {
    return useQuery<IPatient>([QUERY_KEYS.PATIENT], async () => await patientService.getPatient(_id)
    )
}

export const useGetSearchedPatientsQuery = (query: string) => {
    return useQuery<ISearchPatient[]>([QUERY_KEYS.PATIENTSEARCH], async () => await patientService.getSearchedPatients(query), {
        retry: 0
    }
    )
}
