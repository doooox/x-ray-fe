import { httpService } from "../HttpService";
import { IUser } from "../../types/user.type"
import { IRegister } from "../../types/register.type";
import { ENDPOINTS } from "../../utils/static";
import { ILogin } from "../../types/login.type";
import { getItemFromLocalStorage } from "../../utils/storage";

class AuthService {
    private httpService = httpService;

    register = async (data: IRegister) => {
        return await this.httpService.request<IUser>({
            url: ENDPOINTS.REGISTER,
            method: "POST",
            data
        })
    }

    login = async (data: ILogin) => {
        return await this.httpService.request<IUser>({
            url: ENDPOINTS.LOGIN,
            method: "POST",
            data,

        })
    }

    logout = async (): Promise<{ message: string }> => {
        const token = getItemFromLocalStorage("token");
        return await httpService.request<{ message: string }>({
            url: ENDPOINTS.LOGOUT,
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
}

export const authService = new AuthService();

