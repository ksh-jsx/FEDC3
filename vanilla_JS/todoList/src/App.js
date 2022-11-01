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
    onClick: (id) => {
      const selectedTodo = this.state.todos.find((todo) => todo.id === id);
      request(`https://kdt.roto.codes/comments?todo.id=${id}`, (comments) => {
        this.setState({
          ...this.state,
          selectedTodo,
          comments,
        });
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

  this.init = () => {
    request("https://kdt.roto.codes/todos", (todos) => {
      this.setState({
        ...this.state,
        todos,
      });
    });
  };

  this.init();
}
