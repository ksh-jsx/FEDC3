import styled from "@emotion/styled";
import Loading from "../Loading";
import Movie from "./Movie";
import { useRecoilValue } from "recoil";
import { moviesState } from "../../utils/store/moviesState";
import { settingState } from "../../utils/store/settingState";
import Modal from "./Modal";

const MovieContainer = () => {
  const { movies } = useRecoilValue(moviesState);
  const isLoading = useRecoilValue(settingState("isLoading"));
  const setting = useRecoilValue(settingState("isModalOn"));

  return (
    <Section>
      {isLoading && <Loading />}
      {movies.length > 0 ? (
        <MoviesContainer>
          {movies.map((movie) => (
            <Movie movie={movie} key={movie.imdbID} />
          ))}
        </MoviesContainer>
      ) : (
        <NoResult>
          Nothing!
          <br />
          Search For A Movie
        </NoResult>
      )}
      {setting && <Modal />}
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

const NoResult = styled.div`
  color: var(--gray);
  font-size: 30px;
  padding-top: 100px;
  text-align: center;
  line-height: 150%;
`;
