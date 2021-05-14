import { FC } from "react";
import styled from "styled-components";

const ParentContainer: FC = ({ children }) => {
  return <Container> {children}</Container>;
};

const Container = styled.main`
  width: 100vw;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 30px;
`;

export default ParentContainer;
