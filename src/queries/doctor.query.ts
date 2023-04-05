import { useQuery } from "@tanstack/react-query";
import { doctorService } from "../services/X-ray/DoctroService";
import { IDoctor } from "../types/doctor.types";
import { QUERY_KEYS } from "../utils/static";
import { ISearchDoctor } from "../types/search.type";

export const useGetDoctorsQuery = () => {
    return useQuery<IDoctor[]>([QUERY_KEYS.DOCTORS], async () => await doctorService.getAllDoctrors())
}

export const useGetDoctorQuery = (_id: string) => {
    return useQuery<IDoctor>([QUERY_KEYS.DOCTOR], async () => await doctorService.getDoctor(_id)
    )
}

export const useGetSearchedDoctorQuery = (query: string) => {
    return useQuery<ISearchDoctor[]>([QUERY_KEYS.DOCTORSEARCH], async () =>
        await doctorService.getSearchedDoctors(query), {
        retry: 0
    }
    )
}
