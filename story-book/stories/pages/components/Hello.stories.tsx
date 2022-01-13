import { action } from "@storybook/addon-actions";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Hello from "../../../src/components/Hello";

export default {
  title: "components/Hello",
  components: Hello,
  decorators: [withKnobs],
} as ComponentMeta<typeof Hello>;

export const hello = () => {
  const big = boolean("bib", false);
  const name = text("name", "Storybook");

  return (
    <Hello
      name={name}
      big={big}
      onHello={action("onHello")}
      onBye={action("onBye")}
    />
  );
};
hello.story = {
  name: "Default",
};

const Template: ComponentStory<typeof Hello> = (args) => <Hello {...args} />;

export const standard = () => <Hello name="Storybook" />;
export const big = () => <Hello name="Stroybook" big />;
