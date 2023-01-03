import { atomFamily } from "recoil";
import { request } from "../../utils/fetch";

export const movieDetailState = atomFamily({
  key: "movieDetailState",
  default: (id) => {
    return {
      id,
      movie: {},
    };
  },
});
