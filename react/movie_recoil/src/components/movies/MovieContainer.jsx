import styled from "@emotion/styled";
import Movie from "./Movie";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { keywordState } from "../../utils/store/keywordState";
import { moviesState } from "../../utils/store/moviesState";

const MovieContainer = () => {
  const key = useRecoilValue(keywordState);
  const { movies } = useRecoilValue(moviesState);

  useEffect(() => {
    console.log(key);
    console.log(movies);
  }, [key, movies]);

  return (
    <Section>
      <MoviesContainer>
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.imdbID} />
        ))}
      </MoviesContainer>
    </Section>
  );
};

export default MovieContainer;

const Section = styled.section`
  min-height: calc(100vh - 201px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MoviesContainer = styled.div`
  max-width: 1440px;
  min-height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
