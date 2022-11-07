import { request } from "./api.js";
import PostPage from "./routes/PostPage.js";
import SideBar from "./routes/SideBar.js";

export default function App({ $target }) {
  if (!new.target) {
    throw new Error("App 컴포넌트에 new 생성자가 필요합니다.");
  }

  this.state = {
    isLoading: false,
    titles: [],
    targetTitle: [],
    content: null,
  };

  this.setState = (nextState) => {
    console.log(nextState);
    this.state = nextState;
    postPage.setState(this.state);
    sideBar.setState(this.state.titles);
  };

  const sideBar = new SideBar({
    $target,
    initialState: [],
  });

  const postPage = new PostPage({
    $target,
    initialState: [],
  });

  this.init = async () => {
    try {
      this.setState({
        ...this.state,
        isLoading: true,
      });

      const res = await request("/");
      console.log(res);
      this.setState({
        ...this.state,
        titles: res.map((x) => x.title),
        targetTitle: res[0].title,
        content: res[0].content,
      });
    } catch (e) {
      console.error(e);
    } finally {
      this.setState({
        ...this.state,
        isLoading: false,
      });
    }
  };

  this.init();
}
