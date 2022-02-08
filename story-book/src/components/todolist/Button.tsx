import styled from "@emotion/styled";

interface Props {
  children?: string;
  onAddText?: any;
}

const ButtonItem = ({ children, onAddText }: Props) => {
  const addTodohandle = () => {
    onAddText();
  };

  return <ButtonContainer onClick={addTodohandle}>{children}</ButtonContainer>;
};

const ButtonContainer = styled.button`
  padding: 10px 15px;
  box-sizing: border-box;
  text-align: center;
  border: none;
  border-radius: 20px;

  :hover {
    background: blue;
    color: white;
    transition: all 0.5s;
  }
`;

export default ButtonItem;
