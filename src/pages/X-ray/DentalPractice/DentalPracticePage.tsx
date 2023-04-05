import useAuthGuard from "../../../hooks/useAuthGuard";
import { useGetDentalPracticesQuery } from "../../../queries/dentalPractice.query";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../utils/static";
import "./DentalPracticePage.css";
import DentalPracticeSearchComponent from "../../../component/DentalPracticeSearchComponent";

const DentalPracticePage = () => {
  useAuthGuard();
  const navigate = useNavigate();
  const { data: dentalPractices } = useGetDentalPracticesQuery();

  return (
    <div className="dental-practice-page">
      <DentalPracticeSearchComponent />
      <h1 className="page-title">Dental Practices</h1>
      <ul className="practice-list">
        {dentalPractices?.map((practice) => (
          <li key={practice._id} className="practice-item">
            <Link
              to={`${ROUTES.DPRACTICE}/${practice._id}`}
              className="practice-link"
            >
              {practice.name}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className="navigation-button"
        onClick={() => {
          navigate(ROUTES.ADDDENTALPRACTICE);
        }}
      >
        Add new
      </button>
    </div>
  );
};

export default DentalPracticePage;
