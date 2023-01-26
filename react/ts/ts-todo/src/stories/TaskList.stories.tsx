import TaskList from "../components/TaskList";
import TaskProvider from "../store/TaskProvider";

export default {
  title: "Component/TaskList",
  component: TaskList,
  argTypes: {},
};

export const Default = () => {
  const task = [
    {
      id: "123",
      content: "Todo",
      complete: false,
    },
    {
      id: "124",
      content: "Todo2",
      complete: true,
    },
  ];

  return (
    <TaskProvider initialTasks={task}>
      <TaskList />
    </TaskProvider>
  );
};
