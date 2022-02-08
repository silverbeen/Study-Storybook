/* eslint-disable import/no-anonymous-default-export */
import { action } from "@storybook/addon-actions";
import { boolean, withKnobs, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import Text from "../../../src/components/Text";

// 폴더 구조 생성
export default {
  title: "components/Text",
  component: Text,
  decorators: [withKnobs], // 애드온 적용
} as Meta;

export const Hello = () => {
  // knobs 만들기
  const underline = boolean("", false);
  const name = text("name", "Stortbook");

  return (
    <Text
      underline={underline}
      active={boolean("버튼 활성", false)}
      onActiveHandler={action("클릭")}
    >
      {name}
    </Text>
  );
};

// export const Default = () => <Text>{STORY_TEXT}</Text>;

// export const Red = () => <Text color="red">{STORY_TEXT}</Text>;

// export const Italic = () => <Text italic>{STORY_TEXT}</Text>;

// export const Underline = () => <Text underline>{STORY_TEXT}</Text>;
