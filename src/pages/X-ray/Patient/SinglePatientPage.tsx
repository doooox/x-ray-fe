import { useEffect } from "react";
import { useGetPatientQuery } from "../../../queries/patient.query";
import { useNavigate, useParams } from "react-router-dom";
import AddXRayImage from "../../../component/AddXRayImage";
import "./SinglePatientPage.css";
import { ROUTES } from "../../../utils/static";
import useAuthGuard from "../../../hooks/useAuthGuard";

const SinglePatientPage = () => {
  useAuthGuard();
  const navigate = useNavigate();
  const { _id } = useParams();
  const { data: patient, refetch } = useGetPatientQuery(_id || "");

  useEffect(() => {
    refetch();
  }, [patient, refetch]);

  return (
    <div className="patient-page-container">
      <div className="patient-page">
        <div className="patient-page-info">
          <h3 className="patient-page__title">
            <small style={{ display: "block" }}>
              Patient: {patient?.firstName} {patient?.lastName}
            </small>
          </h3>
          <p>
            Dental practice:{" "}
            <small style={{ display: "block" }}>
              {patient?.dentalPractice?.name}
            </small>
          </p>
          <p>
            Doctor:{" "}
            <small style={{ display: "block" }}>
              {patient?.doctor?.firstName} {patient?.doctor?.lastName}
            </small>
          </p>
          <button
            onClick={() => navigate(`${ROUTES.DOCTOR}/${patient?.doctor?._id}`)}
          >
            Back
          </button>
        </div>
        <div className="patient-page__xrays">
          {patient?.xRays?.map((xRay) => (
            <img
              key={xRay._id}
              src={xRay.xRay}
              alt="X-Ray"
              style={{ maxWidth: "100%" }}
              className="patient-page__xray-image"
              onClick={() => navigate(`${ROUTES.XRAY}/${xRay._id}`)}
            />
          ))}
        </div>
      </div>
      <div className="patient-page__form">
        <AddXRayImage refetch={refetch} />
      </div>
    </div>
  );
};

export default SinglePatientPage;
