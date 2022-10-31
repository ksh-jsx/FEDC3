import { Header } from "./components/Header.js";
import { TodoForm } from "./components/TodoForm.js";
import { TodoListSection } from "./components/TodoListSection.js";
import { request } from "./api.js";
import { storage } from "./api.js";

export class App {
  constructor($app) {
    this.state = {
      isInit: false,
      isLoading: false,
      modalVisibility: false,
      res: [],
    };

    this.$target = document.createElement("div");
    this.$target.className = "modal_background";

    $app.append(this.$target);

    this.header = new Header({
      $app,
      initialState: this.state,
      onOpen: () => {
        this.setState({
          ...this.state,
          modalVisibility: true,
        });
      },
    });

    this.todoForm = new TodoForm({
      $app,
      initialState: this.state,
      onClose: () => {
        this.setState({
          ...this.state,
          modalVisibility: false,
        });
      },
      onSubmit: (text) => {
        const nextState = [
          ...this.state.res,
          {
            title: text,
            content: "test",
            isCompleted: false,
          },
        ];

        this.setState({
          ...this.state,
          res: nextState,
        });

        storage.setItem("todos", JSON.stringify(nextState));
      },
    });

    this.todoListSection = new TodoListSection({
      $app,
      initialState: this.state,
    });

    this.init();
  }

  setState(nextState) {
    console.log(this.state);
    this.state = nextState;
    this.header.setState(this.state);
    this.todoForm.setState(this.state);
    this.todoListSection.setState(this.state.res);
  }

  async init() {
    try {
      this.setState({
        ...this.state,
        isLoading: true,
      });

      const res = await request();
      this.setState({
        ...this.state,
        res,
      });
    } catch (e) {
      console.error(e);
    } finally {
      this.setState({
        ...this.state,
        isLoading: false,
        isInit: true,
      });
    }
  }
}
