import { push } from "./router.js";

export default function PostList({ $target, initialState }) {
  const postListElement = document.createElement("div");

  postListElement.classList.add("post-list");

  $target.appendChild(postListElement);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    postListElement.innerHTML = `
      <ul>
        ${this.state
          .map(
            (post) => `
          <li data-id="${post.id}">${post.title}</li>
        `
          )
          .join("")}
      </ul>
    `;
  };

  this.render();

  postListElement.addEventListener("click", (e) => {
    const $li = e.target.closest("li");
    console.log($li);
    if ($li) {
      const { id } = $li.dataset;
      push(`/posts/${id}`);
    }
  });
}
