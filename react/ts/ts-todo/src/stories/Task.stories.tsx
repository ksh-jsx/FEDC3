import Task from "../components/Task";

export default {
  title: "Component/Task",
  component: Task,
  argTypes: {},
};

export const Default = () => {
  return <Task id="123" content="Todo" complete />;
};
