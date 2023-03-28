import { useForm } from "react-hook-form";
import { ILogin } from "../../types/login.type";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../../services/Auth/AuthService";
import useAuthGuard from "../../hooks/useAuthGuard";

const LoginPage = () => {
  useAuthGuard();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();

  const { login } = useContext(UserContext);

  const { mutate } = useMutation(authService.login, {
    onSuccess: (data) => {
      login(data);
    },
  });

  const onSubmitHandler = (data: ILogin) => {
    console.log(data);
    mutate(data);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title">
          <h1>Login</h1>
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
              type="password"
              placeholder="Enter your password..."
              {...register("password", {
                required: "Please confirm your password",
              })}
            />
            <small>{errors.password?.message}</small>
            <button type="submit">Login</button>
          </form>
        </div>
        <Link to={"/register"} className="link">
          Don't have an account? Go to register page
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
