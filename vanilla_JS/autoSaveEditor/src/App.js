import PostsPage from "./routes/PostsPage.js";
import PostEditPage from "./routes/PostEditPage.js";
import { initRouter } from "./router.js";

export default function App({ $target }) {
  const postsPage = new PostsPage({
    $target,
  });

  const postEditPage = new PostEditPage({
    $target,
    initialState: {
      postId: "new",
      post: {
        title: "",
        content: "",
      },
    },
  });

  this.route = () => {
    const { pathname } = window.location;
    $target.innerHTML = "";

    if (pathname === "/") {
      postsPage.setState();
    } else if (pathname.indexOf("/posts/") === 0) {
      const [, , postId] = pathname.split("/");

      postEditPage.setState({ postId });
    }
  };

  this.route();

  initRouter(() => this.route());
}
