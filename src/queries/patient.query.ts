import { useQuery } from "@tanstack/react-query";
import { IPatient } from "../types/patient.types";
import { QUERY_KEYS } from "../utils/static";
import { patientService } from "../services/X-ray/PatientService";

export const useGetPatientQuery = (_id: string) => {
    return useQuery<IPatient>([QUERY_KEYS.PATIENT], async () =>
        await patientService.getPatient(_id)
    )
}
