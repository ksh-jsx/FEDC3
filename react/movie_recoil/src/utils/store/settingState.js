import { atom } from "recoil";

export const settingState = atom({
  key: "settingState",
  default: {
    isLoading: false,
    isModalOn: false,
    targetMovieId: null,
  },
});
