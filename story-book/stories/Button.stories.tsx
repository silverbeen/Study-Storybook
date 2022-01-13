import React from "react";
import { ComponentMeta, ComponentStory, Meta, Story } from "@storybook/react";
import { Button, Props } from "../src/components/Button";
import {action} from '@storybook/addon-actions'

export default {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    children: {
      defaultValue: "Default Text",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary",
  children: "I am secondary",
  onClick: action("secondary"),
};
