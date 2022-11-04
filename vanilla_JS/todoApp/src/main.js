import App from "./App.js";

const DUMMY = [
  {
    _id: 1,
    content: "JS 학습",
    isCompleted: true,
  },
  {
    _id: 2,
    content: "JS 복습",
    isCompleted: false,
  },
];

const $target = document.querySelector("#app");

new App({ $target });
