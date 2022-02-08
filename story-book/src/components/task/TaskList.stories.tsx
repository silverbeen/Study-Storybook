/* eslint-disable import/no-anonymous-default-export */
import { Story } from "@storybook/react";
import TaskList, { TaskListProps } from "./TaskList";
import * as TaskStories from "./Task.stories";

export default {
  title: "Task/TaskList",
  component: TaskList,
};

const Template: Story<TaskListProps> = (args) => <TaskList {...args} />;

console.log(TaskStories);

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { ...TaskStories?.Default?.args?.task, id: "1", title: "ㅇㅇㅇㅇ" },
    {
      ...TaskStories?.Default?.args?.task,
      id: "2",
      title: "Task 2",
      state: "TASK_ARCHIVED",
    },
    { ...TaskStories?.Default?.args?.task, id: "3", title: "ㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㄹㅇㄹ" },
    { ...TaskStories?.Default?.args?.task, id: "4", title: "ㅇㅇㅇㅇㅇ" },
    {
      ...TaskStories?.Default?.args?.task,
      id: "5",
      title: "Task 5",
      state: "TASK_ARCHIVED",
    },
    { ...TaskStories?.Default?.args?.task, id: "6", title: "Task 6" },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
};
