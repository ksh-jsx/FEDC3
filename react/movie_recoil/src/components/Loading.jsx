import styled from "@emotion/styled";

const Loading = () => {
  return (
    <LoadingContainer>
      <img src="https://cdn.roto.codes/images/nyan-cat.gif" alt="loading" />
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);

  & > img {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
  }
`;
