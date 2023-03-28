import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../types/user.type";
import { ROUTES } from "../utils/static";
import {
  getItemFromLocalStorage,
  removeItemFromStorage,
  setItemToLocalStorage,
} from "../utils/storage";
import { authService } from "../services/Auth/AuthService";

const useUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(
    getItemFromLocalStorage("user")
  );

  const login = (user: IUser) => {
    setUser(user);
    setItemToLocalStorage("user", JSON.stringify(user));
    setItemToLocalStorage("token", JSON.stringify(user.token));
    navigate(ROUTES.DPRACTICE);
  };

  const logout = async () => {
    try {
      await authService.logout();
      removeItemFromStorage("user");
      removeItemFromStorage("token");
      setUser(null);
      navigate(ROUTES.LOGIN);
    } catch (error) {
      console.log(error);
    }
  };

  return { user, setUser, login, logout };
};

export default useUser;
