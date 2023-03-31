import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { doctorService } from "../../../services/X-ray/DoctroService";
import { IAddDoctor } from "../../../types/doctor.types";
import { ROUTES } from "../../../utils/static";
import "./AddDoctorPage.css";

const AddDoctorPage = () => {
  const { _id } = useParams();
  console.log(_id);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAddDoctor>();

  const { mutate } = useMutation(doctorService.addDoctor, {
    onSuccess: () => {
      reset();
      navigate(`${ROUTES.DPRACTICE}/${_id}`);
    },
  });
  const onSubmit: SubmitHandler<IAddDoctor> = (data) => {
    if (!_id) {
      console.log("no Id");
      return;
    }
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      dentalPracticeId: _id,
    };
    mutate(payload);
  };

  return (
    <div className="add-doctor-page">
      <h1>Add Doctor</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Doctor first name..."
          {...register("firstName", {
            required: "Doctor first name required",
          })}
        />
        {errors.firstName && <small>{errors.firstName.message}</small>}
        <input
          type="text"
          placeholder="Doctor last name..."
          {...register("lastName", {
            required: "Doctor last namerequired",
          })}
        />
        {errors.lastName && <small>{errors.lastName.message}</small>}
        <input
          type="email"
          placeholder="Doctor email..."
          {...register("email", {
            required: "Doctor email required",
          })}
        />
        {errors.email && <small>{errors.email.message}</small>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddDoctorPage;
