import React from "react";
import { ComponentMeta, ComponentStory, Meta, Story } from "@storybook/react";
import { Button, Props } from "../Button";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "components/Button",
  component: Button,
  decorators: [withKnobs],
  argTypes: {
    onClick: { action: "clicked" },
    children: {
      defaultValue: "Default Text",
    },
    fontSize: {
      select: {
        defaultValue: 16,
      },
    },
    backgroundColor: {
      defaultValue: "gray",
    },
  },
} as ComponentMeta<typeof Button>;

// export const test = () => {
//   const big = boolean("big", false);
//   const children = text("children", "Storybook");

//   return <Button children={children} big={big} />;
// };
// test.story = {
//   name: "Default",
// };

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary",
  children: "I am secondary",
  onClick: action("secondary"),
};
