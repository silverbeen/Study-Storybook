import styled from "@emotion/styled";
import { useState } from "react";

interface Props {
  onChange?: any;
  border?: boolean;
}

const InputItem = ({ onChange, border }: Props) => {
  const [text, setText] = useState();
  const [borderColor, setBorderColor] = useState<boolean>(false);

  const chageInputHandle = (e: any) => {
    const { value } = e.target;
    setText(value);
    // onChange(borderColor);
    if (value.length > 0) setBorderColor(true);
    else setBorderColor(false);
  };

  return (
    <InputContainer
      placeholder="내용을 입력해주세요"
      onChange={(e: any) => chageInputHandle(e)}
      border={borderColor}
    ></InputContainer>
  );
};

const InputContainer = styled.input<Props>`
  padding: 10px 20px;
  box-sizing: border-box;
  border: ${({ border }) => (border ? "1px solid red" : "1px solid gray")};
  border-radius: 10px;
`;

export default InputItem;
