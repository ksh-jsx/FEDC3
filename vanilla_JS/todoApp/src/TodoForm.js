import { setItem, getItem, removeItem } from "./storage.js";

const TODO_TEMP_SAVE_KEY = "TODO_TEMP_SAVE_KEY";

export default function TodoForm({ $target, initialState, onSubmit }) {
  const $form = document.createElement("form");

  $target.appendChild($form);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $form.innerHTML = `
      <input type="text" placeholder="할일을 입력하세요.">
      <button>추가하기</button>
    `;
  };

  this.render();

  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    const $input = $form.querySelector("input");
    const content = $input.value;

    onSubmit(content);
    $input.value = "";
    removeItem(TODO_TEMP_SAVE_KEY);
  });

  const $input = $form.querySelector("input");

  $input.value = getItem(TODO_TEMP_SAVE_KEY, "");
  $input.addEventListener("keyup", (e) => {
    setItem(TODO_TEMP_SAVE_KEY, e.target.value);
  });
}
