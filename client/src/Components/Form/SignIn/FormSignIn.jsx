import { Wrapper, Title } from "../Form.styles";
import { useForm } from "react-hook-form";
import { LogIn } from "../../../hooks/requests";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const FormSignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    const response = await LogIn(data);
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
        <Title>Sign in</Title>
        {message}
        <label htmlFor="email">Email Address</label>
        <span>{errors.email && errors.email.message}</span>
        <input
          id="email"
          type="text"
          {...register("email", {
            required:
              "Please login with the email address you use to register.",
          })}
        />
        <label htmlFor="password">Password</label>
        <span>{errors.password && errors.password.message}</span>
        <input id="password" {...register("password", { required: true })} />
        <button type="submit">Sign In</button>
      </form>
    </Wrapper>
  );
};
