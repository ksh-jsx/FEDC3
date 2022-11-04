import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import TodoComments from "./TodoComments.js";
import { setItem } from "./Storage.js";
import { request } from "./api.js";

export default function App({ $target }) {
  this.state = {
    todos: [],
    selectedTodo: null,
    comments: [],
  };

  this.setState = (nextState) => {
    this.state = nextState;
    todoList.setState(this.state.todos);
    todoComments.setState(this.state);
  };

  new Header({
    $target,
    text: "Simple Todo List",
  });

  new TodoForm({
    $target,
    onSubmit: (text) => {
      const nextState = {
        ...this.state,
        todos: [...this.state.todos, { text }],
      };
      this.setState(nextState);

      setItem("todos", JSON.stringify(nextState));
    },
  });

  const todoList = new TodoList({
    $target,
    initialState: this.state.todos,
    onClick: async (id) => {
      const selectedTodo = this.state.todos.find((todo) => todo.id === id);
      const data = request(`https://kdt.roto.codes/comments?todo.id=${id}`);

      this.setState({
        ...this.state,
        selectedTodo,
        comments: data,
      });
    },
  });

  const todoComments = new TodoComments({
    $target,
    initialState: {
      selectedTodo: this.state.selectedTodo,
      comments: this.state.comments,
    },
  });

  this.init = async () => {
    const data = await request("https://kdt.roto.codes/todos");

    this.setState({
      ...this.state,
      todos: data,
    });
  };

  this.init();
}
