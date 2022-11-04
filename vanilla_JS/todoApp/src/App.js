import { request } from "./api";
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function App({ $target }) {
  this.state = {
    username: "roto",
    todos: [],
  };

  new Header({
    $target,
    initialState: this.state.username,
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

      await request(`/${this.state.username}`, {
        method: "POST",
        body: JSON.stringify({
          content,
          isCompleted: false,
        }),
      });

      await fetchTodos();
    },
  });

  const todoList = new TodoList({
    $target,
    initialState: this.state.todos,
  });

  this.setState = (nextState) => {
    this.state = nextState;
    todoList.setState(this.state.todos);
  };

  const fetchTodos = async () => {
    const { username } = this.state;

    if (username) {
      const todos = await request(`/${username}`);

      this.setState({
        ...this.state,
        todos,
      });
    }
  };

  fetchTodos();
}
