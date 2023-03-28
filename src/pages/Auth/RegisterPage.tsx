import "./Auth.css";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import { IRegister } from "../../types/register.type";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../../services/Auth/AuthService";
import useAuthGuard from "../../hooks/useAuthGuard";

const RegisterPage = () => {
  useAuthGuard();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IRegister>();

  const { login } = useContext(UserContext);

  const { mutate } = useMutation(authService.register, {
    onSuccess: (data) => {
      login(data);
    },
  });

  const onSubmitHandler = (data: IRegister) => {
    mutate(data);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title">
          <h1>Register user</h1>
        </div>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <input
              type="text"
              placeholder="Enter your email..."
              {...register("email", {
                required: "Email is requiered",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Not a valid email",
                },
              })}
            />
            <small>{errors.email?.message}</small>
            <input
              type="text"
              placeholder="Enter your first name..."
              {...register("firstName", {
                required: "First name is requiered",
              })}
            />
            <small>{errors.firstName?.message}</small>
            <input
              type="text"
              placeholder="Enter your last name..."
              {...register("lastName", {
                required: "Last name is requiered",
              })}
            />
            <small>{errors.lastName?.message}</small>
            <input
              type="password"
              placeholder="Enter your password..."
              {...register("password", {
                required: "Password name is requiered",
              })}
            />
            <small>{errors.password?.message}</small>
            <input
              type="password"
              placeholder="Confirm password..."
              {...register("confirmPassword", {
                required: "Password confirmation is requiered",
                validate: (val: string) => {
                  return watch("password") !== val
                    ? "Passwords dont match"
                    : true;
                },
              })}
            />
            <small>{errors.confirmPassword?.message}</small>
            <button type="submit">Register</button>
          </form>
        </div>
        <Link to={"/login"} className="link">
          Have an account? Go to login page
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
