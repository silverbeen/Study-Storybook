import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { Children, useRef, useState } from "react";
import Input from "../../../src/components/Input";

export default {
  title: "components/Input",
  component: Input,
  argTypes: {
    onChange: { action: "onChang" },
    children: {
      defaultValue: "이름",
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [inputs, setInputs] = useState({ name: "", age: "" });
  const onChange = (e: any) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return <Input {...args} />;
};

export const input = Template.bind({});

input.args = {
  variant: true,
  children: "",
  onChange: action("change"),
};
