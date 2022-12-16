import styled from "@emotion/styled";

const Button = styled.button`
  display: block;
  width: 100%;
  background-color: black;
  height: 40px;
  padding: 8px 6px;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: #111;
  }
  &:active {
    background-color: #222;
  }
  &:disabled {
    background-color: #888;
  }
`;

export default Button;
