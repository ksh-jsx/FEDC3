import { Header } from "./components/Header.js";
import { TodoForm } from "./components/TodoForm.js";
import { TodoListSection } from "./components/TodoListSection.js";
import { TodoCount } from "./components/TodoCount.js";
import { request } from "./api.js";
import { storage } from "./api.js";

export class App {
  constructor($app) {
    this.state = {
      isInit: false,
      isLoading: false,
      modalVisibility: false,
      tabState: ["on", "off", "off", "off"],
      origin: [],
      res: [],
    };

    this.$target = document.createElement("div"); // 모달 띄울 시 배경 어둡게 하는 용
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
      onSubmit: ({ title, content, targetDate }) => {
        const nextState = [
          ...this.state.res,
          {
            title,
            content,
            targetDate,
            isCompleted: false,
            isFolded: true,
            createdAt: new Date(),
            modifiedAt: null,
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
      onFold: (id) => {
        const nextState = [...this.state.res];
        nextState[id].isFolded = !nextState[id].isFolded;
        this.setState({
          ...this.state,
          res: nextState,
        });
      },
      onCheck: (id) => {
        const nextState = [...this.state.res];
        nextState[id].isCompleted = !nextState[id].isCompleted;
        this.setState({
          ...this.state,
          res: nextState,
        });
        storage.setItem("todos", JSON.stringify(this.state.res));
      },
    });

    this.todoCount = new TodoCount({
      $app,
      initialState: this.state,
      onClick: (id) => {
        const today = new Date();
        switch (id) {
          case "1":
            this.setState({
              ...this.state,
              tabState: ["on", "off", "off", "off"],
              res: this.state.origin,
            });
            break;
          case "2":
            this.setState({
              ...this.state,
              tabState: ["off", "on", "off", "off"],
              res: this.state.origin.filter((todo) => todo.isCompleted),
            });
            break;
          case "3":
            this.setState({
              ...this.state,
              tabState: ["off", "off", "on", "off"],
              res: this.state.origin.filter((todo) => {
                const [mm, dd, yy] = todo.targetDate.split("/");
                const myDate = new Date(yy, mm - 1, dd);

                return myDate - today > 0 ? (todo.isCompleted ? false : true) : false;
              }),
            });
            break;
          case "4":
            this.setState({
              ...this.state,
              tabState: ["off", "off", "off", "on"],
              res: this.state.origin.filter((todo) => {
                const [mm, dd, yy] = todo.targetDate.split("/");
                const myDate = new Date(yy, mm - 1, dd);

                return myDate - today > 0 ? false : todo.isCompleted ? false : true;
              }),
            });
            break;
        }
      },
    });

    this.init();
  }

  setState(nextState) {
    console.log(this.state);
    this.state = nextState;
    this.header.setState(this.state);
    this.todoForm.setState(this.state);
    this.todoListSection.setState(this.state.res);
    this.todoCount.setState(this.state);
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
        origin: res,
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
