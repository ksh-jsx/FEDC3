export class TodoForm {
  constructor({ $app, initialState, onClose, onSubmit }) {
    this.state = initialState;
    this.onClose = onClose;
    this.onSubmit = onSubmit;

    this.$target = document.createElement("div");

    $app.appendChild(this.$target);

    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    const veil = document.querySelector(".modal_background").style;

    if (this.state.modalVisibility) {
      this.$target.className = "modal on";
      veil.display = "block";
    } else {
      this.$target.className = "modal off";
      veil.display = "none";
    }
  }

  render() {
    this.$target.innerHTML = `
      <form>
        <input type="text" name="todo" autoComplete="off"/>
        <button>Add</button>
        <button class="modal_close">닫기</button>
      </form>
    `;

    if (!this.state.isInit) {
      this.$target.addEventListener("submit", (e) => {
        e.preventDefault();
        const $input = this.$target.querySelector("input[name=todo]");
        const text = $input.value;

        if (text.length > 1) {
          $input.value = "";
          this.onSubmit(text);
        }
      });
      document.querySelector(".modal_close").addEventListener("click", (e) => {
        e.stopImmediatePropagation();
        this.onClose();
      });
    }
  }
}
