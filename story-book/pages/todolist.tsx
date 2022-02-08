import styled from "@emotion/styled";
import InputItem from "../src/components/todolist/InputItem";
import ListItem from "../src/components/todolist/ListItem";
import { Button } from "../stories/pages/components/todolist/Button.stories";

export const dummy = [
  {
    title: "운동하기",
  },
  {
    title: "운동하기",
  },
  {
    title: "운동하기",
  },
  {
    title: "운동하기",
  },
  {
    title: "운동하기",
  },
];

const TodoList = () => {
  return (
    <ListContainer>
      <InputContainer>
        <InputItem />
        <Button />
      </InputContainer>
      <ListWrap>
        {dummy.map((item, index) => (
          <ListItem key={index} title={item.title} />
        ))}
      </ListWrap>
    </ListContainer>
  );
};

const ListContainer = styled.section`
  width: 500px;
  height: 600px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
`;

const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export default TodoList;
