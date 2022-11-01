import { Datepicker } from "vanillajs-datepicker";

export class TodoForm {
  constructor({ $app, initialState, onClose, onSubmit }) {
    this.state = initialState;
    this.onClose = onClose;
    this.onSubmit = onSubmit;
    this.values = {
      title: null,
      content: null,
      targetDate: null,
    };

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

  setValue(newValue) {
    this.values = newValue;
  }

  render() {
    this.$target.innerHTML = `
      <form>
        <input type="text" name="title" autoComplete="off" placeHolder="제목"/>
        <input type="text" name="content" autoComplete="off" placeHolder="내용"/>
        <input type="text" name="targetDate" autoComplete="off" placeHolder="마감 목표일" />
        <button class="tdl_submit">추가하기</button>
        <button class="modal_close">닫기</button>
      </form>
    `;

    if (!this.state.isInit) {
      const dateInput = document.querySelector('input[name="targetDate"]');
      new Datepicker(dateInput, {
        autohide: false,
        dateDelimiter: ",",
      });

      dateInput.addEventListener("click", (e) => {
        document.querySelector(".datepicker-picker").style.display = "block";
      });

      this.$target.addEventListener("submit", (e) => {
        e.preventDefault();
      });

      document.querySelector(".tdl_submit").addEventListener("click", (e) => {
        this.setValue({
          ...this.values,
          targetDate: document.querySelector("input[name=targetDate]").value,
        });

        const isEmpty = (object) => !Object.values(object).every((x) => x !== null && x !== "");

        if (isEmpty(this.values)) {
          alert("빈칸을 모두 채워주세요");
        } else {
          if (confirm("이대로 추가하시겠습니까?")) {
            this.onSubmit(this.values);
            this.setValue(null);
            this.onClose();
          }
        }
      });

      document.querySelectorAll("input[type=text]").forEach(($input) => {
        $input.addEventListener("change", (e) => {
          this.setValue({
            ...this.values,
            [e.target.name]: e.target.value,
          });
        });
      });

      document.querySelector(".modal_close").addEventListener("click", (e) => {
        e.stopImmediatePropagation();
        this.setValue(null);
        this.onClose();
      });
    }
  }
}
