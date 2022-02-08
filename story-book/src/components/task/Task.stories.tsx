/* eslint-disable import/no-anonymous-default-export */
import { Meta, Story } from "@storybook/react";
import React from "react";
import Task from "./Task";

export default {
  title: "Task/task",
  component: Task,
} as Meta;

const Template: Story<any> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "운동하기",
    state: "TASK_INBOX",
    updateAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
