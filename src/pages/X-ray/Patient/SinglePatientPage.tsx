import React from "react";
import { useGetPatientQuery } from "../../../queries/patient.query";
import { useParams } from "react-router-dom";

const SinglePatientPage = () => {
  const { _id } = useParams();
  const { data: patient } = useGetPatientQuery(_id || "");

  console.log();

  return (
    <div>
      <h1>
        Patient: {patient?.firstName} {patient?.lastName}
      </h1>
      <h5>Dental practice:{patient?.dentalPractice?.name}</h5>
      <h5>
        Doctor: {patient?.doctor?.firstName} {patient?.doctor?.lastName}
      </h5>
    </div>
  );
};

export default SinglePatientPage;
