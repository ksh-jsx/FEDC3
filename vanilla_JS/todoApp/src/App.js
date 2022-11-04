import { request } from "./api";
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function App({ $target }) {
  this.state = {
    username: "roto",
    todos: [],
    isTodoLoading: false,
  };

  const header = new Header({
    $target,
    initialState: {
      username: this.state.username,
      isLoading: this.state.isTodoLoading,
    },
  });

  new TodoForm({
    $target,
    onSubmit: async (content) => {
      const todo = {
        content,
        isCompleted: false,
      };

      this.setState({
        ...this.state,
        todos: [...this.state.todos, todo],
      });

      await request(`/${this.state.username}?delay=1000`, {
        method: "POST",
        body: JSON.stringify(todo),
      });

      await fetchTodos();
    },
  });

  const todoList = new TodoList({
    $target,
    initialState: {
      isTodoLoading: this.state.isTodoLoading,
      todos: this.state.todos,
    },
    onRemove: async (id) => {
      const nextTodos = [...this.state.todos].filter((todo) => todo._id !== id);

      this.setState({
        ...this.state,
        todos: nextTodos,
      });

      await request(`/${this.state.username}/${id}`, {
        method: "DELETE",
      });

      await fetchTodos();
    },
    onToggle: async (id) => {
      const todoIndex = this.state.todos.findIndex((todo) => todo._id === id);
      const nextTodos = [...this.state.todos];

      nextTodos[todoIndex].isCompleted = !nextTodos[todoIndex].isCompleted;

      this.setState({
        ...this.state,
        todos: nextTodos,
      });
      await request(`/${this.state.username}/${id}/toggle`, {
        method: "PUT",
      });

      await fetchTodos();
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;
    todoList.setState({
      todos: this.state.todos,
      isLoading: this.state.isTodoLoading,
    });
    header.setState({
      username: this.state.username,
      isLoading: this.state.isTodoLoading,
    });
  };

  const fetchTodos = async () => {
    const { username } = this.state;

    if (username) {
      this.setState({
        ...this.state,
        isTodoLoading: true,
      });
      const todos = await request(`/${username}?delay=1000`);

      this.setState({
        ...this.state,
        todos,
        isTodoLoading: false,
      });
    }
  };

  fetchTodos();
}
