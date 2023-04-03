import { useNavigate, useParams } from "react-router-dom";
import { useGetDoctorQuery } from "../../../queries/doctor.query";
import { ENDPOINTS, ROUTES } from "../../../utils/static";
import "./SingleDoctorPage.css";
import useAuthGuard from "../../../hooks/useAuthGuard";

const SingleDoctorPage = () => {
  useAuthGuard();
  const { _id } = useParams();
  const navigate = useNavigate();
  const { data: doctor } = useGetDoctorQuery(_id || "");
  return (
    <div className="single-doctor-page">
      <h1>
        {doctor?.firstName} {doctor?.lastName}
      </h1>
      <button
        className="single-doctor-page__buttons"
        onClick={() => {
          navigate(`${ENDPOINTS.ADDPATIENT}/${_id}`);
        }}
      >
        Add patient
      </button>
      <ul>
        {doctor?.patients?.map((patient) => (
          <li
            onClick={() => {
              navigate(`${ROUTES.PATIENT}/${patient._id}`);
            }}
          >
            {patient.firstName} {patient.lastName}
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          navigate(`${ROUTES.DPRACTICE}/${doctor?.dentalPractice?._id}`)
        }
      >
        Back
      </button>
    </div>
  );
};

export default SingleDoctorPage;
