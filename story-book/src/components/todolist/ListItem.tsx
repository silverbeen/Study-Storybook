import styled from "@emotion/styled";

interface Props {
  title: string;
}

const ListItem = ({ title }: Props) => {
  return <ListContainer>{title}</ListContainer>;
};

const ListContainer = styled.div`
  margin: 5px 0;
`;

export default ListItem;
