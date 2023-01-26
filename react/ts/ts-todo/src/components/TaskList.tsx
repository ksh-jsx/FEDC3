import styled from "@emotion/styled";
import Task from "./Task";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoState, getTodoState } from "../store/recoil";
import { useEffect } from "react";

const TaskList = (props: any) => {
  const [recoilTask] = useRecoilState(todoState);
  const values = useRecoilValue(getTodoState);

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <UnorderedList {...props}>
      {recoilTask.map((item: any) => (
        <Task key={item.id} id={item.id} content={item.content} complete={item.complete} />
      ))}
    </UnorderedList>
  );
};

export default TaskList;

const UnorderedList = styled.ul`
  width: 400px;
  margin-top: 15px;
  padding: 0;
  & > li {
    &:not(:first-of-type) {
      margin-top: 8px;
    }
  }
`;
