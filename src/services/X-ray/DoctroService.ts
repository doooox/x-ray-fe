import { IAddDoctor, IDoctor, IDoctorDraft } from "../../types/doctor.types"
import { ENDPOINTS } from "../../utils/static"
import { getItemFromLocalStorage } from "../../utils/storage"
import { httpService } from "../HttpService"

class DoctorService {
    private httpService = httpService

    getDoctor = async (_id: string) => {
        const token = getItemFromLocalStorage("token")
        return await this.httpService.request<IDoctor>({
            url: `${ENDPOINTS.DOCTOR}/${_id}`,
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    }
    addDoctor = async (data: IAddDoctor) => {
        const token = getItemFromLocalStorage("token");
        return await this.httpService.request<IAddDoctor>({
            url: `${ENDPOINTS.ADDDOCTOR}/${data.dentalPracticeId}`,
            method: "POST",
            data,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    }

}

export const doctorService = new DoctorService()