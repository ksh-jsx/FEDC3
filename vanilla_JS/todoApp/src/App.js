import { request } from "./api";
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import UserList from "./userList";

export default function App({ $target }) {
  const $userListContainer = document.createElement("div");
  const $todoListContainer = document.createElement("div");

  $target.appendChild($userListContainer);
  $target.appendChild($todoListContainer);

  this.state = {
    userList: [],
    selectedUsername: null,
    todos: [],
    isTodoLoading: false,
  };

  const userList = new UserList({
    $target: $userListContainer,
    initialState: this.state.userList,
    onSelect: async (username) => {
      this.setState({
        ...this.state,
        selectedUsername: username,
      });

      await fetchTodos();
    },
  });

  const header = new Header({
    $target: $todoListContainer,
    initialState: {
      selectedUsername: this.state.selectedUsername,
      isLoading: this.state.isTodoLoading,
    },
  });

  new TodoForm({
    $target: $todoListContainer,
    onSubmit: async (content) => {
      const isFirstTodoAdd = this.state.todos.length === 0;
      const todo = {
        content,
        isCompleted: false,
      };

      this.setState({
        ...this.state,
        todos: [...this.state.todos, todo],
      });

      await request(`/${this.state.selectedUsername}?delay=1000`, {
        method: "POST",
        body: JSON.stringify(todo),
      });

      if (isFirstTodoAdd) {
        await fetchUserList();
      }
    },
  });

  const todoList = new TodoList({
    $target: $todoListContainer,
    initialState: {
      isTodoLoading: this.state.isTodoLoading,
      todos: this.state.todos,
      selectedUsername: this.state.selectedUsername,
    },
    onRemove: async (id) => {
      const nextTodos = [...this.state.todos].filter((todo) => todo._id !== id);

      this.setState({
        ...this.state,
        todos: nextTodos,
      });

      await request(`/${this.state.selectedUsername}/${id}`, {
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
      await request(`/${this.state.selectedUsername}/${id}/toggle`, {
        method: "PUT",
      });

      await fetchTodos();
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;

    header.setState({
      selectedUsername: this.state.selectedUsername,
      isLoading: this.state.isTodoLoading,
    });

    todoList.setState({
      todos: this.state.todos,
      isLoading: this.state.isTodoLoading,
    });

    userList.setState(this.state.userList);

    this.render();
  };

  this.render = () => {
    const { selectedUsername } = this.state;
    $todoListContainer.style.display = selectedUsername ? "block" : "none";
  };

  const fetchUserList = async () => {
    const userList = await request("/users");
    this.setState({
      ...this.state,
      userList,
    });
  };

  const fetchTodos = async () => {
    const { selectedUsername } = this.state;

    if (selectedUsername) {
      this.setState({
        ...this.state,
        isTodoLoading: true,
      });

      const todos = await request(`/${selectedUsername}?delay=1000`);

      this.setState({
        ...this.state,
        todos,
        isTodoLoading: false,
      });
    }
  };

  const init = async () => {
    await fetchUserList();
    await fetchTodos();
  };

  this.render();
  init();
}
