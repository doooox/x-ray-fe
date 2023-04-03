import { useGetXRayImageQuery } from "../../../queries/xRayImage.query";
import { useNavigate, useParams } from "react-router-dom";
import "./XRayImage.css";
import useAuthGuard from "../../../hooks/useAuthGuard";

const XRayImagePage = () => {
  useAuthGuard();
  const { _id } = useParams();
  const navigate = useNavigate();
  const { data: xRay } = useGetXRayImageQuery(_id || "");

  return (
    <div className="xray-image-page">
      <img key={xRay?._id} src={xRay?.xRay} alt="X-Ray" />
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default XRayImagePage;
