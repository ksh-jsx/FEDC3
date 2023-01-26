import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import Task from "./Task";

const GET_TASKS = gql`
  query GetTasks {
    tasks {
      data {
        id
        attributes {
          content
          complete
        }
      }
    }
  }
`;

const TaskList = (props) => {
  const { data, loading, error } = useQuery(GET_TASKS);

  if (loading) return "Loading...";
  if (error) return "Error!";
  console.log(data);
  return (
    <UnorderedList {...props}>
      {data.tasks.data.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          content={task.attributes.content}
          complete={task.attributes.complete}
        />
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
