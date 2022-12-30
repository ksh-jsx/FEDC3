import styled from "@emotion/styled";
import { useRecoilState, useRecoilValue } from "recoil";
import { settingState } from "../../utils/store/settingState";
import { familyState } from "../../utils/store/familyState";

const Movie = ({ movie }) => {
  const [setting, setSetting] = useRecoilState(settingState);
  const family = useRecoilValue(familyState(movie.imdbID));

  return (
    <Card onClick={() => setSetting({ ...setting, isModalOn: true, targetMovieId: movie.imdbID })}>
      <Poster>
        {movie.Poster !== "N/A" ? (
          <img src={movie.Poster} alt="poster" />
        ) : (
          <NoPoster>No Poster</NoPoster>
        )}
      </Poster>
      <Info>
        <Title>{family.name ? family.name : movie.Title}</Title>
        <Year>개봉 : {movie.Year}년</Year>
      </Info>
    </Card>
  );
};

export default Movie;

const Card = styled.div`
  max-width: 300px;
  height: 450px;
  margin: 30px 3%;
  background-color: var(--secodary);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
`;

const Poster = styled.div`
  height: 350px;
  & > img {
    width: 100%;
    height: 100%;
    border-radius: 8px 8px 0 0;
  }
`;
const NoPoster = styled.div`
  color: var(--gray);
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;
const Info = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.div`
  width: 95%;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: box;
  vertical-align: top;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: var(--white);
`;

const Year = styled.div`
  font-size: 15px;
  color: var(--gray);
`;
