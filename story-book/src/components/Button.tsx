import React, { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** 버튼 안에 내용 */
  children: ReactNode;

  variant: "primary" | "secondary";
  fontSize: number;
  backgroundColor: string;
}

const ButtonStyle = styled.button<Props>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
  font-size: ${({ fontSize }) => fontSize};
  transition: all 0.5s;

  :hover {
    background-color: #12b886;
  }

  &:active {
    background-color: #12b886;
  }
`;

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
export const Button = ({
  children,
  variant = "primary",
  fontSize,
  backgroundColor,
  ...props
}: Props) => {
  return (
    <ButtonStyle
      variant={variant}
      fontSize={fontSize}
      backgroundColor={backgroundColor}
      {...props}
    >
      {children}
    </ButtonStyle>
  );
};
