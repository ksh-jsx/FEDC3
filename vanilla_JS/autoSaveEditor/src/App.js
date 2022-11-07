import PostsPage from "./PostsPage";

export default function App({ $target }) {
  const postsPage = new PostsPage({ $target });

  postsPage.render();
}
