import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/static";
import { useGetPatientsQuery } from "../../../queries/patient.query";
import PatientSearchComponent from "../../../component/PatientSearchComponent";
import { useEffect } from "react";

const PatientsPage = () => {
  const { data: patients, refetch } = useGetPatientsQuery();

  useEffect(() => {
    refetch();
  }, [refetch, patients]);

  return (
    <div>
      <div className="dental-practice-page">
        {<PatientSearchComponent />}
        <h1 className="page-title">Patients</h1>
        <ul className="practice-list">
          {patients?.map((patient) => (
            <li key={patient._id} className="practice-item">
              <Link
                to={`${ROUTES.PATIENT}/${patient._id}`}
                className="practice-link"
              >
                {patient.firstName} {patient.lastName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientsPage;
