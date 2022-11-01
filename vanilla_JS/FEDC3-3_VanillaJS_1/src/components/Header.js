export class Header {
  constructor({ $app, initialState, onOpen }) {
    this.state = initialState;
    this.onOpen = onOpen;

    this.$target = document.createElement("header");
    this.$target.className = "header";

    $app.appendChild(this.$target);
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.$target.innerHTML = `
      <h1>Todo List</h1>
      <button class="modal_btn">TODOLIST 추가</button>
    `;

    if (this.state.isInit) {
      document.querySelector(".modal_btn").addEventListener("click", (e) => {
        e.stopImmediatePropagation();
        this.onOpen();
      });
    }
  }
}
