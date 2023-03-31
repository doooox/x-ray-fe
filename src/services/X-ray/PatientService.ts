import { IAddPatient, IPatient, IPatientDraft } from "../../types/patient.types";
import { ENDPOINTS } from "../../utils/static";
import { getItemFromLocalStorage } from "../../utils/storage";
import { httpService } from "../HttpService";

class PatientService {
    private httpService = httpService

    getPatient = async (_id: string) => {
        const token = getItemFromLocalStorage("token")
        return await this.httpService.request<IPatient>({
            url: `${ENDPOINTS.PATIENT}/${_id}`,
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    }

    addPatient = async (data: IAddPatient) => {
        const token = getItemFromLocalStorage("token");
        return await this.httpService.request<IAddPatient>({
            url: `${ENDPOINTS.ADDPATIENT}/${data.doctorId}`,
            method: "POST",
            data,
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    }

}

export const patientService = new PatientService()