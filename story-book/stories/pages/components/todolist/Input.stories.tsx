/* eslint-disable import/no-anonymous-default-export */
import { action } from "@storybook/addon-actions";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import InputItem from "../../../../src/components/todolist/InputItem";

export default {
  title: "todolist/Input",
  components: InputItem,
  decorators: [withKnobs],
} as Meta;

export const Input = () => {
  return <InputItem onChange={action("입력중")} border={boolean("", false)} />;
};
