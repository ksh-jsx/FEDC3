import { createContext, ReactNode, useContext } from "react";
import { v4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

interface Task {
  id: string;
  content: string;
  complete: boolean;
}

interface ITaskContext {
  tasks: Task[];
  addTask(content: string): void;
  updateTask(id: string, status: boolean): void;
  removeTask(id: string): void;
}

// {}만 쓰면 undefined로 인해 빨간줄이 그어진다. 그래서 as 별칭을 통해 임시방편?
const TaskContext = createContext<ITaskContext>({} as ITaskContext);

export const useTasks = () => useContext(TaskContext);

interface Props {
  // children: ReactChild;
  children: ReactNode;
  initialTasks?: Task[];
}

const TaskProvider = ({ children, initialTasks = [] }: Props) => {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", initialTasks);

  const addTask = (content: string) => {
    setTasks([
      ...tasks,
      {
        id: v4(),
        content,
        complete: false,
      },
    ]);
  };

  const updateTask = (id: string, status: boolean) => {
    setTasks(tasks.map((item: any) => (item.id === id ? { ...item, complete: status } : item)));
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((item: any) => item.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
