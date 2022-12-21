import React from "react";
import Input from "./Input";
import styled from "@emotion/styled";
import Button from "./Button";
import useForm from "../hooks/useForm";

const CardForm = styled.div`
  padding: 16px;
  width: 400px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const ErrorText = styled.span`
  font-size: 12px;
  color: red;
`;

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });
};

const LoginForm = () => {
  const { values, errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: "",
      password: "",
    },
    onSubmit: async () => {
      await sleep();
      console.log("submit!");
    },
    validate: ({ name, password }) => {
      const newErrors = {};
      if (!name) newErrors.name = "이름을 알려주세요";
      if (!password) newErrors.password = "비번을 알려주세요";
      return newErrors;
    },
  });

  return (
    <CardForm onSubmit={handleSubmit}>
      <Title>Login</Title>
      <Input type="text" name="name" placeholder="Name" onChange={handleChange} />
      {errors.name && <ErrorText>{errors.name}</ErrorText>}
      <Input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        style={{ marginTop: 8 }}
      />
      {errors.password && <ErrorText>{errors.password}</ErrorText>}
      <Button type="submit" disabled={isLoading} style={{ marginTop: 16 }} onClick={handleSubmit}>
        Login
      </Button>
    </CardForm>
  );
};

export default LoginForm;
