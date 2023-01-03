import { atom } from "recoil";

export const moviesState = atom({
  key: "moviesState",
  default: {
    movies: [],
    totalResults: 0,
    targetMovieId: "tt3498820",
  },
});
