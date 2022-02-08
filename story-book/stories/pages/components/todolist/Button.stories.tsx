/* eslint-disable import/no-anonymous-default-export */
import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import ButtonItem from "../../../../src/components/todolist/Button";

export default {
  title: "todolist/button",
  components: ButtonItem,
} as Meta;

export const Button = () => {
  return <ButtonItem onAddText={action("등록")}>등록</ButtonItem>;
};
