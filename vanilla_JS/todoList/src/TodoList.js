export default function TodoList({ $target, initialState, onClick }) {
  const $todoList = document.createElement("div");

  $target.appendChild($todoList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $todoList.innerHTML = `
    <ul>
      ${this.state
        .map(({ text, id }) => `<li data-id=${id} style=cursor:pointer>${text}</li>`)
        .join("")}
    </ui>
    `;

    $todoList.querySelectorAll("li").forEach(($li) => {
      $li.addEventListener("click", (e) => {
        const { id } = e.target.dataset;
        onClick(parseInt(id));
      });
    });
  };
}
