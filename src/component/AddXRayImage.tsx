import { SubmitHandler, useForm } from "react-hook-form";
import { IAddXRay } from "../types/xRay.types";
import { useMutation } from "@tanstack/react-query";
import { xRayService } from "../services/X-ray/XRay";
import { useParams } from "react-router-dom";
import "./AddXRayImage.css";

interface Props {
  refetch: any;
}

const AddXRayImage = ({ refetch }: Props) => {
  const { _id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAddXRay>();

  const { mutate: add } = useMutation(xRayService.addXRayImage, {
    onSuccess: () => {
      reset();
      refetch();
    },
  });

  const onSubmit: SubmitHandler<IAddXRay> = async (data) => {
    if (!_id) return;

    const formData = new FormData();
    formData.append("xRay", data.xRay[0]);
    formData.append("patientId", _id);

    add({ ...data, patientId: _id });
  };

  return (
    <div className="add-xray-image">
      <h1 className="add-xray-image__title">Add X-ray</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="add-xray-image__form-group">
          <input
            type="file"
            {...register("xRay", {
              required: "X-ray image required",
            })}
          />
          {errors.xRay && (
            <small className="add-xray-image__error">
              {errors.xRay.message}
            </small>
          )}
        </div>
        <button className="add-xray-image__button" type="submit">
          Upload
        </button>
      </form>
    </div>
  );
};

export default AddXRayImage;
