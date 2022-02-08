import styled from "@emotion/styled";

const Empty = () => {
  return <EmptyContainer>Empty</EmptyContainer>;
};

const EmptyContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Empty;
