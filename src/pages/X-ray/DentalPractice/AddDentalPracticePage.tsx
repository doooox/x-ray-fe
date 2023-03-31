import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { dentalPracticeService } from "../../../services/X-ray/DentalPractice";
import { IDentalPracticeDraft } from "../../../types/dentalPractice.type";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../utils/static";
import useAuthGuard from "../../../hooks/useAuthGuard";
import "./AddDentalPracticePage.css";

const AddDentalPracticePage = () => {
  useAuthGuard();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IDentalPracticeDraft>();

  const { mutate: add } = useMutation(dentalPracticeService.addDentalPractice, {
    onSuccess: () => {
      console.log("here?");

      reset();
      navigate(ROUTES.DPRACTICE);
    },
  });

  const onSubmit: SubmitHandler<IDentalPracticeDraft> = (data) => {
    add(data);
  };

  return (
    <div className="add-dental-practice-page">
      <h1>Add Dental Practice</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Dental practice name..."
          {...register("name", {
            required: "Dental practice name required",
          })}
        />
        {errors.name && <small>{errors.name.message}</small>}
        <input
          type="text"
          placeholder="Dental practice address..."
          {...register("address", {
            required: "Dental practice address required",
          })}
        />
        {errors.address && <small>{errors.address.message}</small>}
        <button type="submit">Submit</button>
      </form>
      <button
        onClick={() => {
          navigate(ROUTES.DPRACTICE);
        }}
        style={{ margin: "1rem" }}
      >
        Back
      </button>
    </div>
  );
};

export default AddDentalPracticePage;
