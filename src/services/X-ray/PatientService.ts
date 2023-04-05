import { IAddPatient, IPatient } from "../../types/patient.types";
import { ISearchPatient } from "../../types/search.type";
import { ENDPOINTS } from "../../utils/static";
import { getItemFromLocalStorage } from "../../utils/storage";
import { httpService } from "../HttpService";

class PatientService {
    private httpService = httpService

    getAllPatiens = async () => {
        const token = getItemFromLocalStorage("token");
        return await this.httpService.request<IPatient[]>({
            url: ENDPOINTS.PATIENT,
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    }

    getPatient = async (_id: string) => {
        const token = getItemFromLocalStorage("token");
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

    getSearchedPatients = async (query: string,) => {
        const token = getItemFromLocalStorage("token");
        return await this.httpService.request<ISearchPatient[]>({
            url: `${ENDPOINTS.SEARCHPATIENT}?search=${query}`,
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    }
}

export const patientService = new PatientService()