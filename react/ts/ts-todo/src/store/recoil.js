import { atom, selector } from "recoil";

export const todoState = atom({
  key: "todoState", // unique ID (다른 atoms/selectors을 구별하기 위해서)
  default: [
    {
      id: "1",
      content: "임시데이터",
      complete: false,
    },
  ], // default value (aka initial value)
});

export const getTodoState = selector({
  key: "getTodoState",
  get: ({ get }) => {
    const todos = get(todoState);

    return todos;
  },
});
