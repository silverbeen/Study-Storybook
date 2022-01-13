import React, { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";

interface Props extends HTMLAttributes<HTMLInputElement> {
  children: ReactNode | any;
  variant: false | true;
}

const InputLayout = styled.div<Props>`
  border: 1px solid ${({ variant }) => (variant ? "blue" : "gray")};
  textoverflow: "ellipsis";
  height: 40px;
`;

const Input = ({ children, variant = false, ...props }: Props) => {
  return (
    // <InputLayout
    //   variant={variant}
    //   placeholder="Input title"
    //   {...props}
    // ></InputLayout>
    <></>
  );
};

export default Input;
