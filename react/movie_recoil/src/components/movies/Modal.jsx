import styled from "@emotion/styled";
import { useRecoilState, useRecoilValue } from "recoil";
import { settingState } from "../../utils/store/settingState";
import { movieDetailState } from "../../utils/store/movieDetailState";
import { moviesState } from "../../utils/store/moviesState";

const Modal = () => {
  const { targetMovieId } = useRecoilValue(moviesState);
  const [setting, setSetting] = useRecoilState(settingState("isModalOn"));
  const family = useRecoilValue(movieDetailState(targetMovieId));
  return (
    <>
      {setting && (
        <ModalContainer>
          <ModalInner style={{ backgroundImage: family.Poster && `url(${family.Poster})` }}>
            <Close onClick={() => setSetting(false)}>X</Close>
            <MovieStoreDatas>
              <Title>{family.Title}</Title>
              <EtcMovieStoreDatas>
                {family.Year} · {family.Runtime} · {family.Rated} ·&nbsp;
                <Img src={require("../../assets/star.png")} alt="star" /> {family.imdbRating}
              </EtcMovieStoreDatas>
              <Plot>{family.Plot}</Plot>
              <div>
                Actors: <Gray>{family.Actors}</Gray>
              </div>
              <div>
                Directors: <Gray>{family.Director}</Gray>
              </div>
            </MovieStoreDatas>
          </ModalInner>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
`;
/* prettier-ignore */
const ModalInner = styled.div`
  width: 90%;
  max-width: 500px;
  max-height: 800px;
  height: 80vh;
  border-radius: 10px;
  position: relative;
  background-image: url("../../assets/no_image.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 10px 0;
  border: 1px solid;
  background-color: #eee;
  display: flex;
  flex-direction: column; ;
`;

const Close = styled.div`
  float: right;
  cursor: pointer;
  width: 25px;
  height: 25px;
  text-align: center;
  border-radius: 8px;
  margin: 10px 10px;
  font-size: 20px;
  background-color: var(--primary);
  color: #fff;
`;

const Img = styled.img`
  width: 13px;
`;
const MovieStoreDatas = styled.div`
  width: calc(100% - 40px);
  background: linear-gradient(
    rgba(41, 45, 62, 0) 0%,
    rgba(41, 45, 62, 0.7) 10%,
    var(--primary) 25%
  );
  position: absolute;
  bottom: 0;
  color: var(--white);
  padding: 25px 20px;
  border-radius: 8px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding: 10px 0;
`;

const EtcMovieStoreDatas = styled.div`
  color: var(--gray);
`;
const Plot = styled.div`
  margin: 20px 0;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: box;
  vertical-align: top;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
`;

const Gray = styled.div`
  color: var(--gray);
`;
