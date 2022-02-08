import TaskList from "../src/components/task/TaskList";

const dummy = [
  {
    id: "1",
    title: "운동하기",
    state: "TASK_INBOX",
    updateAt: new Date(2021, 0, 1, 9, 0),
  },
  {
    id: "2",
    title: "운동하기",
    state: "TASK_INBOX",
    updateAt: new Date(2021, 0, 1, 9, 0),
  },
  {
    id: "3",
    title: "운동하기",
    state: "TASK_INBOX",
    updateAt: new Date(2021, 0, 1, 9, 0),
  },
  {
    id: "4",
    title: "운동하기",
    state: "TASK_INBOX",
    updateAt: new Date(2021, 0, 1, 9, 0),
  },
  {
    id: "5",
    title: "운동하기",
    state: "TASK_INBOX",
    updateAt: new Date(2021, 0, 1, 9, 0),
  },
  {
    id: "6",
    title: "운동하기",
    state: "TASK_INBOX",
    updateAt: new Date(2021, 0, 1, 9, 0),
  },
];

const task = () => {
  return (
    <TaskList
      loading={false}
      tasks={dummy}
      onArchiveTask={() => {}}
      onPinTask={function noRefCheck() {}}
    />
  );
};

export default task;
