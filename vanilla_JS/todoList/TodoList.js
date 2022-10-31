function TodoList(params) {
  const $todoList = document.createElement("div");
  const $target = params.$target;
  $target.appendChild($todoList);

  this.state = params.initialState;

  this.render = () => {
    $todoList.innerHTML = `
    <ul>
      ${this.state.map((todo) => `<li>${todo.text}</li>`).join("")}
    </ui>
    `;
  };

  this.render();
}
