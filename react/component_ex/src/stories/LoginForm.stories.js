import LoginForm from "../components/LoginForm";

export default {
  title: "Component/LoginForm",
  component: LoginForm,
};

export const Default = (args) => {
  return <LoginForm {...args} />;
};
