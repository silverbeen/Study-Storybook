import React, { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  /**버튼의 속성입니다.*/
  variant: "primary" | "secondary";
}

const ButtonStyle = styled.button<Props>`
  background-color: ${({ variant }) =>
    variant === "primary" ? "blue" : "gray"};
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
`;

export const Button = ({ children, variant = "primary", ...props }: Props) => {
  return (
    <ButtonStyle variant={variant} {...props}>
      {children}
    </ButtonStyle>
  );
};
