import Toast from "../components/Toast";

export default {
  title: "Component/Toast",
  component: Toast,
  argTypes: {},
};

export const Default = () => {
  return <button onClick={() => Toast.show("안녕하세요!", 3000)}>toast 보여라</button>;
};
