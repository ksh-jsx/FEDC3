import { useRecoilState, useSetRecoilState } from "recoil";
import { moviesState } from "../utils/store/moviesState";
import { settingState } from "../utils/store/settingState";
import { request } from "../utils/fetch";

const useFetch = () => {
  const setMovieData = useSetRecoilState(moviesState);
  //const [setting, setSetting] = useRecoilState(settingState);
  const setSetting = useSetRecoilState(settingState("isLoading"));

  const fetchMovies = async (keyword) => {
    try {
      //setSetting({ ...setting, isLoading: true });
      setSetting(true);
      const res = await request(`s=${keyword}&page=1`);

      if (res.Response === "True") {
        const movies = res.Search.map((data) => {
          const Poster = data.Poster.replace("SX300", "SX700");
          return { ...data, Poster };
        });

        setMovieData({
          movies,
          totalResults: Number(res.totalResults),
        });
      } else {
        console.log("영화없음");
      }
      //setSetting({ ...setting, isLoading: false });
      setSetting(false);
    } catch (e) {
      throw new Error(`${e.message}`);
    }
  };

  return { fetchMovies };
};

export default useFetch;
