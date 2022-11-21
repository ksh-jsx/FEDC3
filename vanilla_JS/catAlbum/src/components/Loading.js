export default function Loading({ $target, initialState }) {
  const $loading = document.createElement("div");
  $loading.className = "Loading Modal";
  $loading.innerHTML =
    '<div class="content"><img src="https://cdn.roto.codes/images/nyan-cat.gif" alt="loading"></div>';

  this.state = initialState;

  $target.appendChild($loading);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $loading.style.display = this.state ? "block" : "none";
  };

  this.render();
}
