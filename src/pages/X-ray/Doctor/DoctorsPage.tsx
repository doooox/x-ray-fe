import { Link } from "react-router-dom";
import { useGetDoctorsQuery } from "../../../queries/doctor.query";
import { ROUTES } from "../../../utils/static";
import DoctorSearchComponent from "../../../component/DoctorSearchComponent";
import { useEffect } from "react";

export const DoctorsPage = () => {
  const { data: doctors, refetch } = useGetDoctorsQuery();

  useEffect(() => {
    refetch();
  }, [doctors, refetch]);

  return (
    <div>
      <div className="dental-practice-page">
        {<DoctorSearchComponent />}
        <h1 className="page-title">Doctors</h1>
        <ul className="practice-list">
          {doctors?.map((doctor) => (
            <li key={doctor._id} className="practice-item">
              <Link
                to={`${ROUTES.DOCTOR}/${doctor._id}`}
                className="practice-link"
              >
                {doctor.firstName} {doctor.lastName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
