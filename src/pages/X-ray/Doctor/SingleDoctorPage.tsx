import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetDoctorQuery } from "../../../queries/doctor.query";
import { ENDPOINTS, ROUTES } from "../../../utils/static";

const SingleDoctorPage = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { data: doctor } = useGetDoctorQuery(_id || "");

  return (
    <div>
      <h1>{doctor?.firstName}</h1>
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
        onClick={() => {
          navigate(`${ENDPOINTS.ADDPATIENT}/${_id}`);
        }}
      >
        Add patient
      </button>
    </div>
  );
};

export default SingleDoctorPage;
