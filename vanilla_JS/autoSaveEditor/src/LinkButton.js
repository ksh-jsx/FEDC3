import { push } from "./router.js";

export default function LinkButton({ $target, link }) {
  this.state = link;

  const $list = document.createElement("button");

  $target.appendChild($list);

  this.render = () => {
    $list.textContent = this.state.text;
  };

  this.render();

  $list.addEventListener("click", () => {
    push(this.state.link);
  });
}
