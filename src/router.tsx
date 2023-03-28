import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import LogoutPage from "./pages/Auth/LogoutPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import DentalPracticePage from "./pages/X-ray/DentalPracticePage";
import { ROUTES } from "./utils/static";
import WelcomPage from "./pages/WelcomPage/WelcomPage";

const AppRoute = () => {
  return (
    <Routes>
      <Route path={ROUTES.WELCOM} element={<WelcomPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.DPRACTICE} element={<DentalPracticePage />} />
      <Route path={ROUTES.LOGOUT} element={<LogoutPage />} />
    </Routes>
  );
};

export default AppRoute;
