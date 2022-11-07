import PostList from "./PostList.js";
import { request } from "./api.js";

export default function PostPages({ $target }) {
  const $postPage = document.createElement("div");

  $postPage.classList.add("post-pages");

  const postList = new PostList({
    $target: $postPage,
    initialState: [],
  });

  const newPostButtonElement = document.createElement("button");

  newPostButtonElement.innerText = "New Post";

  $postPage.appendChild(newPostButtonElement);

  const fetchPosts = async () => {
    const posts = await request("/posts");
    postList.setState(posts);
  };

  this.render = async () => {
    await fetchPosts();
    $target.appendChild($postPage);
  };
}
