import { gql, useApolloClient, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import Toggle from "./Toggle";

const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(id: $id) {
      data {
        id
      }
    }
  }
`;

const UPDATE_TASK = gql`
  mutation UpdateTask($id: ID!, $complete: Boolean!) {
    updateTask(id: $id, data: { complete: $complete }) {
      data {
        id
      }
    }
  }
`;

const Task = ({ id, content, complete, ...props }) => {
  const client = useApolloClient();
  const [deleteTask] = useMutation(DELETE_TASK);
  const [updateTask] = useMutation(UPDATE_TASK);

  return (
    <ListItem {...props}>
      <Toggle
        on={complete}
        onChange={(e) => {
          updateTask({ variables: { id, complete: e.target.checked } });
          client.refetchQueries({ include: ["GetTasks"] });
        }}
      />
      <Content complete={complete}>{content}</Content>
      <RemoveButton
        onClick={() => {
          deleteTask({ variables: { id } });
          client.refetchQueries({ include: ["GetTasks"] });
        }}
      >
        Remove
      </RemoveButton>
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
