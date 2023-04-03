import { useNavigate, useParams } from "react-router-dom";
import useAuthGuard from "../../../hooks/useAuthGuard";
import { useGetSingleDentalPracticeQuery } from "../../../queries/dentalPractice.query";
import { ENDPOINTS, ROUTES } from "../../../utils/static";
import "./SingleDentalPractice.css";

const SingleDentalPractice = () => {
  useAuthGuard();
  const { _id } = useParams();
  const navigate = useNavigate();

  const { data: dentalPractice } = useGetSingleDentalPracticeQuery(_id || "");

  return (
    <div className="single-dental-practice">
      <h1 className="practice-name">{dentalPractice?.name}</h1>
      <button
        className="navigation-button"
        onClick={() => {
          navigate(`${ENDPOINTS.ADDDOCTOR}/${_id}`);
        }}
      >
        ADD DOCTOR
      </button>
      <ul className="doctor-list">
        {dentalPractice?.doctors.map((doctor) => (
          <li
            key={doctor._id}
            className="doctor-item"
            onClick={() => navigate(`${ROUTES.DOCTOR}/${doctor._id}`)}
          >
            {doctor.firstName} {doctor.lastName}
            <small> {doctor._id}</small>
          </li>
        ))}
      </ul>

      <button
        className="navigation-button"
        onClick={() => {
          navigate(ROUTES.DPRACTICE);
        }}
      >
        GoBack
      </button>
    </div>
  );
};

export default SingleDentalPractice;
