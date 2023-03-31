import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IAddPatient } from "../../../types/patient.types";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { patientService } from "../../../services/X-ray/PatientService";
import { ENDPOINTS } from "../../../utils/static";
import { useGetDoctorQuery } from "../../../queries/doctor.query";
import { useGetSingleDentalPracticeQuery } from "../../../queries/dentalPractice.query";

const AddPatientPage = () => {
  const navigate = useNavigate();
  const { _id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAddPatient>();

  const { mutate: add } = useMutation(patientService.addPatient, {
    onSuccess: () => {
      reset();
      navigate(`${ENDPOINTS.DOCTOR}/${_id}`);
    },
  });

  const { data: doctor } = useGetDoctorQuery(_id || "");

  const onSubmit: SubmitHandler<IAddPatient> = (data) => {
    console.log("1");
    if (!doctor) return;
    console.log("2");
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      doctorId: doctor?._id,
      dentalPracticeId: doctor.dentalPractice?._id,
    };
    console.log("3");

    add(payload);
    console.log("4");
  };

  return (
    <div>
      <h1>Add Patient</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Patient first name..."
          {...register("firstName", {
            required: "Patient first name required",
          })}
        />
        {errors.firstName && <small>{errors.firstName.message}</small>}
        <input
          type="text"
          placeholder="Patient last name..."
          {...register("lastName", {
            required: "Patient last name required",
          })}
        />
        {errors.lastName && <small>{errors.lastName.message}</small>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPatientPage;
