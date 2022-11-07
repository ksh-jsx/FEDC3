import PostsPage from "./PostsPage.js";
import PostEditPage from "./PostEditPage.js";

/*
URL 규칙

루트 : postpages 그리기
루트 외 : 
/posts/{id} - id에 해당하는 포스트 생성
/posts/new - 새 포스트 생성

*/

export default function App({ $target }) {
  const postPages = new PostsPage({
    $target,
  });

  const postEditPage = new PostEditPage({
    $target,
    initialState: {
      postId: "new",
      title: "",
      content: "",
    },
  });

  this.route = () => {
    $target.innerHTML = "";

    const { pathname } = window.location;
    console.log(pathname);

    if (pathname === "/") {
      postPages.render();
    } else if (pathname.includes("/posts/")) {
      const [, , postId] = pathname.split("/");
      postEditPage.setState({ postId });
    }
  };

  this.route();

  window.addEventListener("route-change", (nextUrl) => {
    history.pushState(null, null, nextUrl);
    this.route();
  });
}
