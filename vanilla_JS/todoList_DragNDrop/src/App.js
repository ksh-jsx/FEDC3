import { request } from "./api";
import SyncTaskManager from "./SyncTaskManager";
import TodoList from "./TodoList";

export default function App({ $target }) {
  this.state = {
    todos: [],
  };

  const tasks = new SyncTaskManager();

  const handleTodoProp = async (todoId, bo) => {
    const nextTodos = [...this.state.todos];
    const todoIndex = nextTodos.findIndex((todo) => todo._id === todoId);

    nextTodos[todoIndex].isCompleted = bo;

    this.setState({
      ...this.state,
      todos: nextTodos,
    });

    /*
    tasks.addTask(async () => {
      await request(`/${todoId}/toggle`, {
        method: "PUT",
      });
      await fetchTodos();
    });
    */
    tasks.addTask({
      url: `/${todoId}/toggle`,
      method: "PUT",
    });
  };

  const handleTodoRemove = (todoId) => {
    const nextTodos = [...this.state.todos];
    const todoIndex = nextTodos.findIndex((todo) => todo._id === todoId);

    nextTodos.splice(todoIndex, 1);

    this.setState({
      ...this.state,
      todos: nextTodos,
    });

    tasks.removeTasks(`/${todoId}`);
    tasks.addTask({
      url: `/${todoId}`,
      method: "DELETE",
    });
  };

  const incomletedTodoList = new TodoList({
    $target,
    initialState: {
      title: "완료되지 않은 일들",
      todo: [],
    },
    onDrop: (todoId) => handleTodoProp(todoId, false),
    onRemove: (todoId) => handleTodoRemove(todoId),
  });

  const completedTodoLst = new TodoList({
    $target,
    initialState: {
      title: "완료된 일들",
      todo: [],
    },
    onDrop: (todoId) => handleTodoProp(todoId, true),
    onRemove: (todoId) => handleTodoRemove(todoId),
  });

  this.setState = (nextState) => {
    this.state = nextState;

    const { todos } = this.state;

    incomletedTodoList.setState({
      ...incomletedTodoList.state,
      todos: todos.filter((todo) => !todo.isCompleted),
    });

    completedTodoLst.setState({
      ...completedTodoLst.state,
      todos: todos.filter((todo) => todo.isCompleted),
    });
  };

  const fetchTodos = async () => {
    const todos = await request("");

    this.setState({
      ...this.state,
      todos,
    });
  };

  fetchTodos();

  const $button = document.createElement("button");
  $button.textContent = "변경내용 동기화";

  $target.appendChild($button);

  $button.addEventListener("click", () => tasks.run());
}
