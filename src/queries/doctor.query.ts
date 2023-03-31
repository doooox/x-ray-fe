import { useQuery } from "@tanstack/react-query";
import { doctorService } from "../services/X-ray/DoctroService";
import { IDoctor } from "../types/doctor.types";
import { QUERY_KEYS } from "../utils/static";

export const useGetDoctorQuery = (_id: string) => {
    return useQuery<IDoctor>([QUERY_KEYS.DOCTOR], async () => await doctorService.getDoctor(_id)
    )
}