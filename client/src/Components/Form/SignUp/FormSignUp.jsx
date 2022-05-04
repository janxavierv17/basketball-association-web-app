import { Wrapper, Title, InfoInputs, Inputs } from "../Form.styles";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Register } from "../../../hooks/requests";
export const FormSignUp = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [message, setMessage] = useState();

  const submitHandler = async (data) => {
    const response = await Register(data);
    setMessage(response.data.message);
    navigate("/");
  };
  return (
    <Wrapper>
      <img
        src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
        alt="Basketball court"
      />
      <form onSubmit={handleSubmit(submitHandler)}>
        <Title>Register Here.</Title>
        {message}
        <label htmlFor="email">Email Address</label>
        <span> {errors.email && errors.email.message}</span>
        <input
          id="email"
          type="text"
          {...register("email", {
            required: "Please provide your a valid email address.",
          })}
        />

        <InfoInputs>
          <Inputs>
            <label htmlFor="firstName">First Name</label>
            <span>{errors.firstName && errors.firstName.message}</span>
            <input
              id="firstName"
              type="text"
              {...register("firstName", {
                required: "Please provide your first name.",
              })}
            />
          </Inputs>
          <Inputs>
            <label htmlFor="lastName">Last Name</label>
            <span> {errors.lastName && errors.lastName.message}</span>
            <input
              id="lastName"
              type="text"
              {...register("lastName", {
                required: "Please provide your last name.",
              })}
            />
          </Inputs>
          <Inputs>
            <label htmlFor="password">Password</label>
            <span> {errors.password && errors.password.message}</span>
            <input
              id="password"
              type="text"
              {...register("password", { min: 6 })}
            />
          </Inputs>
          <Inputs>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <span>
              {errors.confirmPassword && errors.confirmPassword.message}
            </span>
            <input
              id="confirmPassword"
              type="text"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === getValues("password") ||
                  "Please make sure that your confirm password matches your password.",
              })}
            />
          </Inputs>
        </InfoInputs>

        <button type="submit">Submit</button>
      </form>
    </Wrapper>
  );
};
