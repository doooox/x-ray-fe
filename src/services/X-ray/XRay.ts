import { IAddXRay, IXray } from "../../types/xRay.types";
import { ENDPOINTS } from "../../utils/static";
import { getItemFromLocalStorage } from "../../utils/storage";
import { httpService } from "../HttpService";

const token = getItemFromLocalStorage("token")

class XRayService {
    private httpService = httpService

    addXRayImage = async (data: IAddXRay) => {

        const formData = new FormData();
        formData.append("xRay", data.xRay[0]);
        formData.append("patientId", data.patientId);

        return await this.httpService.request<IAddXRay>({
            url: `${ENDPOINTS.ADDXRAYIMAGE}/${data.patientId}`,
            method: "POST",
            data: formData,
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    }

    getSingleXRayImage = async (_id: string) => {
        return await this.httpService.request<IXray>({
            url: `${ENDPOINTS.GETXRAY}/${_id}`,
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })

    }
}

export const xRayService = new XRayService();
