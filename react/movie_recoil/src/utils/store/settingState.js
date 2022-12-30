import { atomFamily } from "recoil";

export const settingState = atomFamily({
  key: "settingState",
  default: false,
});

/*
export const settingState = atom({
  key: "settingState",
  default: {
    isLoading: false,
    isModalOn: false,
  },
});
*/
