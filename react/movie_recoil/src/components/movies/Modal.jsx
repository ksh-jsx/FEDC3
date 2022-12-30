import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { settingState } from "../../utils/store/settingState";
import { familyState } from "../../utils/store/familyState";

const Modal = () => {
  const [setting, setSetting] = useRecoilState(settingState);
  const [family, setFamily] = useRecoilState(familyState(setting.targetMovieId));

  return (
    <>
      {setting.isModalOn && (
        <ModalContainer>
          <ModalInner>
            id:
            <Input type="text" value={family.id} readOnly />
            name:
            <Input
              type="text"
              value={family.name}
              onChange={(e) => setFamily({ ...family, name: e.target.value })}
              placeholder="새로운 영화이름을 적으세요"
            />
            <button
              onClick={() => setSetting({ ...setting, isModalOn: false, targetMovieId: null })}
              style={{ marginTop: 30 }}
            >
              x
            </button>
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

  padding: 10px 10px;
  border: 1px solid;
  background-color: #eee;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 200px;
`;
