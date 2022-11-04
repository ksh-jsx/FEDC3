export default function TodoList({ $target, initialState }) {
  const $todo = document.createElement("div");

  $target.appendChild($todo);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (this.state.length === 0) {
      $todo.innerHTML = "Todo가 없습니다";
      return;
    }

    //prettier-ignore
    $todo.innerHTML = `
      <ul>
        ${this.state.map(({_id,content,isCompleted}) => `
          <li data-id=${_id} class="todo-item">
            ${isCompleted ? `<s>${content}</s>` : content}
            <button class="remove">X</button>
          </li>
        `).join('')}
      </ul>
    `
  };

  $todo.addEventListener("click", (e) => {
    const $li = e.target.closest("li");

    if ($li) {
      const { id } = $li.dataset;
      const { className } = e.target;

      if (className === "remove") {
        onRemove(id);
      } else {
        onToggle(id);
      }
    }
  });

  this.render();
}
