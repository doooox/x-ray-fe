import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import LogoutPage from "./pages/Auth/LogoutPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import DentalPracticePage from "./pages/X-ray/DentalPractice/DentalPracticePage";
import { ROUTES } from "./utils/static";
import WelcomPage from "./pages/WelcomPage/WelcomPage";
import SingleDentalPractice from "./pages/X-ray/DentalPractice/SingleDentalPractice";
import AddDentalPracticePage from "./pages/X-ray/DentalPractice/AddDentalPracticePage";
import SingleDoctorPage from "./pages/X-ray/Doctor/SingleDoctorPage";
import AddDoctorPage from "./pages/X-ray/Doctor/AddDoctorPage";
import SinglePatientPage from "./pages/X-ray/Patient/SinglePatientPage";
import AddPatientPage from "./pages/X-ray/Patient/AddPatientPage";
import XRayImagePage from "./pages/X-ray/XRayImage/XRayImagePage";
import { DoctorsPage } from "./pages/X-ray/Doctor/DoctorsPage";
import PatientsPage from "./pages/X-ray/Patient/PatientsPage";
import NavigationComponent from "./component/NavigationComponent";

const AppRoute = () => {
  return (
    <Routes>
      <Route path={ROUTES.WELCOM} element={<WelcomPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.LOGOUT} element={<LogoutPage />} />
      <Route path={ROUTES.WELCOM} element={<NavigationComponent />}>
        <Route path={ROUTES.DPRACTICE} element={<DentalPracticePage />} />
        <Route
          path={ROUTES.SINGLEDENTALPRACTICE}
          element={<SingleDentalPractice />}
        />
        <Route
          path={ROUTES.ADDDENTALPRACTICE}
          element={<AddDentalPracticePage />}
        />
        <Route path={ROUTES.DOCTOR} element={<DoctorsPage />} />
        <Route path={ROUTES.SINGLEDOCTOR} element={<SingleDoctorPage />} />
        <Route path={ROUTES.ADDDOCTOR} element={<AddDoctorPage />} />
        <Route path={ROUTES.PATIENT} element={<PatientsPage />} />
        <Route path={ROUTES.SINGLEPATIENT} element={<SinglePatientPage />} />
        <Route path={ROUTES.ADDPATIENT} element={<AddPatientPage />} />
        <Route path={ROUTES.SINGLEXRAYIMAGE} element={<XRayImagePage />} />
      </Route>
      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  );
};

export default AppRoute;
