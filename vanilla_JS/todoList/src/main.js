const $app = document.querySelector(".app");
const initialState = storage.getItem("todos", []);

new App({
  $target: $app,
  initialState,
});
