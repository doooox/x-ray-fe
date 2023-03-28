import { IUser } from "./user.type";

export interface IUserContext {
    user: IUser | null,
    setUser: (user: IUser) => void,
    login: (user: IUser) => void,
    logout: () => void
}