import { useQuery } from "@tanstack/react-query";
import { dentalPracticeService } from "../services/X-ray/DentalPractice";
import { IDentalPractice } from "../types/dentalPractice.type";
import { QUERY_KEYS } from "../utils/static";
import { ISearchDentalPractice } from "../types/search.type";


export const useGetDentalPracticesQuery = () => {
    return useQuery<IDentalPractice[]>([QUERY_KEYS.DENTALPRACTISEC], async () => await dentalPracticeService.getAllDentalPractices())
}

export const useGetSingleDentalPracticeQuery = (_id: string) => {
    return useQuery<IDentalPractice>([QUERY_KEYS.SINGLEDENTALPRACTICE], async () => await dentalPracticeService.getSingleDentalPractice(_id)
    )
}
export const useGetSearchedDentalPracticeQuery = (query: string) => {
    return useQuery<ISearchDentalPractice[]>([QUERY_KEYS.DENTAPPRACTICESEARCH], async () =>
        await dentalPracticeService.getSearcherdDentalPractice(query), {
        retry: 1
    }
    )
}