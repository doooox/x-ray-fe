import { IDentalPractice, IDentalPracticeDraft } from "../../types/dentalPractice.type";
import { ENDPOINTS } from "../../utils/static";
import { getItemFromLocalStorage } from "../../utils/storage";
import { httpService } from "../HttpService";

class DentalPracticeServise {
    private httpService = httpService

    getAllDentalPractices = async () => {
        const token = getItemFromLocalStorage("token");
        return await this.httpService.request<IDentalPractice[]>({
            url: ENDPOINTS.DENTALPRACTICES,
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    }
    getSingleDentalPractice = async (_id: string) => {
        const token = getItemFromLocalStorage("token");
        return await this.httpService.request<IDentalPractice>({
            url: `${ENDPOINTS.DENTALPRACTICES}/${_id}`,
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    }
    addDentalPractice = async (data: IDentalPracticeDraft) => {
        const token = getItemFromLocalStorage("token");
        return await this.httpService.request<IDentalPracticeDraft>({
            url: ENDPOINTS.ADDDENTALPRACTICE,
            method: "POST",
            data,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    }
}

export const dentalPracticeService = new DentalPracticeServise()