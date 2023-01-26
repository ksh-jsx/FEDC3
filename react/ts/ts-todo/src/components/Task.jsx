import styled from "@emotion/styled";
import Toggle from "./Toggle";

import useRecoil from "../hooks/useRecoil";

const Task = ({ id, content, complete, ...props }) => {
  const [_, updateTask, removeTask] = useRecoil();

  return (
    <ListItem {...props}>
      <Toggle on={complete} onChange={(e) => updateTask(id, e.target.checked)} />
      <Content complete={complete}>{content}</Content>
      <RemoveButton onClick={() => removeTask(id)}>Remove</RemoveButton>
    </ListItem>
  );
};

export default Task;

const ListItem = styled.li`
  display: flex;
  width: 400px;
  height: 40px;
  align-items: center;
  padding: 0 8px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  list-style: none;
  box-sizing: border-box;
`;

const Content = styled.span`
  display: inline-block;
  flex: 1;
  margin-left: 8px;
  font-size: 14px;
  text-decoration: ${({ complete }) => (complete ? "line-through" : "none")};
`;

const RemoveButton = styled.button`
  width: 60px;
  height: 24px;
  margin-left: 8px;
  color: #fff;
  border-radius: 8px;
  border: none;
  background-color: #f00;
  cursor: pointer;
`;
