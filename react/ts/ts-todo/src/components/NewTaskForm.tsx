import { FormEvent, useState } from "react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { todoState } from "../store/recoil";
import { v4 } from "uuid";

const NewTaskForm = (props: any) => {
  const [task, setTask] = useState("");
  const [recoilTask, setRecoilTask] = useRecoilState(todoState);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setRecoilTask([
      ...recoilTask,
      {
        id: v4(),
        content: task,
        complete: false,
      },
    ]);
    setTask("");
  };

  return (
    <Form {...props} onSubmit={handleSubmit}>
      <Input type="text" value={task} onChange={(e) => setTask(e.target.value)} required />
      <SubmitButton>Add</SubmitButton>
    </Form>
  );
};

export default NewTaskForm;
const Form = styled.form`
  width: 400px;
`;

const Input = styled.input`
  width: 332px;
  height: 32px;
  padding: 4px 6px;
  border-radius: 8px;
  border: 2px solid black;
  box-sizing: border-box;
`;
const SubmitButton = styled.button`
  width: 60px;
  height: 32px;
  padding: 4px 6px;
  margin-left: 8px;
  color: white;
  border-radius: 8px;
  border: none;
  background-color: black;
  box-sizing: border-box;
  cursor: pointer;
`;
