import styled from "@emotion/styled";
import Empty from "../common/Empty/Empty";
import Loading from "../common/Loading/Loading";
import Task from "./Task";

export interface TaskListProps {
  loading: boolean;
  tasks: any;
  onPinTask: any;
  onArchiveTask: any;
}

const TaskList = ({
  loading,
  tasks,
  onPinTask,
  onArchiveTask,
}: TaskListProps) => {
  const event = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) return <Loading />;

  if (tasks?.length === 0) return <Empty />;

  return (
    <TaskListContainer>
      {tasks?.map((task: any, index: number) => (
        <Task key={index} task={task} {...event} />
      ))}
    </TaskListContainer>
  );
};

const TaskListContainer = styled.div``;

export default TaskList;
