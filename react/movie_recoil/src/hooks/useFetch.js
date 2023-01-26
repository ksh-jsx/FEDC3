import { useRecoilState,useSetRecoilState } from "recoil";
import { moviesState } from "../utils/store/moviesState";
import { movieDetailState } from "../utils/store/movieDetailState";
import { settingState } from "../utils/store/settingState";
import { request } from "../utils/fetch";

const useFetch = (id = null) => {
  const setMovieData = useSetRecoilState(moviesState);
  const [detailData,setMovieDetailData] = useRecoilState(movieDetailState(id));
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
          targetMovieId:""
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
  const fetchMovieDetail = async () => {
    try {
      setSetting(true);
      const res = await request(`i=${id}&plot=full`);

      if (res.Response === "True") {
        const Poster = res.Poster.replace("SX300", "SX700");

        setMovieDetailData({id,movie:{ ...res, Poster }});
      } else {
        console.log("영화정보없음");
      }
      //setSetting({ ...setting, isLoading: false });
      setSetting(false);
    } catch (e) {
      throw new Error(`${e.message}`);
    }
  };

  return { fetchMovies, fetchMovieDetail };
};

export default useFetch;
