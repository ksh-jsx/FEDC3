import App from "./App";
import Editor from "./Editor";
import { setItem } from "./storage";
import { getItem } from "./storage";

const DUMMY_DATA = [
  { id: 1, title: "test" },
  { id: 2, title: "test123" },
];

const $target = document.querySelector("#app");

const TEMP_POST_SAVE_KEY = "temp-post";

//new App({ $target });

const post = getItem(TEMP_POST_SAVE_KEY, {
  title: "",
  content: "",
});

let timer = null;

new Editor({
  $target,
  initialState: post,
  onEditing: (post) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      setItem("temp-post", {
        ...post,
        tempSaveDate: new Date(),
      });
    }, 500);
  },
});
