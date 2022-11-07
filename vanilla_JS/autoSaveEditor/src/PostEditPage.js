import Editor from "./Editor.js";
import { setItem, getItem, removeItem } from "./storage.js";
import { request } from "./api.js";

export default function PostEditPage({ $target, initialState }) {
  const $post = document.createElement("div");

  $post.classList.add("post-edit-page");

  this.state = initialState;

  let postLocalSaveKey = `temp-post-${this.state.postId}`;

  const post = getItem(postLocalSaveKey, {
    title: "우와 신나는 코딩의 세계",
    content: "재밌는 타이핑을 시작 해 볼까요~~",
  });

  let timer = null;

  const editor = new Editor({
    $target: $post,
    initialState: { post },
    onEditing: (post) => {
      if (timer !== null) {
        clearTimeout(timer);
      }

      timer = setTimeout(async () => {
        setItem(postLocalSaveKey, {
          ...post,
          tempSaveDate: new Date(),
        });

        const isNew = this.state.postId === "new";

        if (isNew) {
          const createdPost = await request("/posts/", {
            method: "POST",
            body: JSON.stringify(post),
          });

          history.replaceState(null, null, `/posts/${createdPost.id}`);

          removeItem(postLocalSaveKey);
        } else {
          await request(`/posts/${post.id}`, {
            method: "PUT",
            body: JSON.stringify(post),
          });

          removeItem(postLocalSaveKey);
        }
      }, 2000);
    },
  });

  this.setState = async (nextState) => {
    if (this.state.postId !== nextState.postId) {
      postLocalSaveKey = `temp-post-${nextState.postId}`;
      this.state = nextState;

      await fetchPost();

      return;
    }

    this.state = nextState;
    this.render();

    editor.setState(
      this.state.post ?? {
        title: "",
        content: "",
      }
    );
  };

  this.render = () => {
    $target.appendChild($post);
  };

  const fetchPost = async () => {
    const { postId } = this.state;

    if (postId !== "new") {
      const post = await request(`/posts/${postId}`);

      const tempPost = getItem(postLocalSaveKey, {
        title: "",
        content: "",
      });

      if (tempPost.tempSaveDate && tempPost.tempSaveDate > post.updated_at) {
        if (confirm("저장되지 않은 임시데이터가 있습니다. 불러올까요?")) {
          this.setState({
            ...this.state,
            post: tempPost,
          });
          return;
        }
      }

      this.setState({
        ...this.state,
        post,
      });
    }
  };

  fetchPost();
}
