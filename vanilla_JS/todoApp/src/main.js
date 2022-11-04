import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

const API_END_PONT = "https://kdt-frontend.todo-api.programmers.co.kr/";

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

new TodoForm({
  $target,
  onSubmit: (content) => {
    alert(content);
  },
});
new TodoList({
  $target,
  initialState: DUMMY,
});
