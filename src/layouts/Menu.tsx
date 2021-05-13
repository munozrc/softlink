import styled from "styled-components";
import {
  IoCodeSlashOutline,
  IoDocumentTextOutline,
  IoGameControllerOutline,
} from "react-icons/io5";

type iconProps = {
  color: string;
};

export default function Menu() {
  return (
    <Nav>
      <NavItem>
        <Icon color={"#28c7fa"}>
          <IoCodeSlashOutline />
        </Icon>
        Programas
      </NavItem>
      <NavItem>
        <Icon color={"#83e85a"}>
          <IoDocumentTextOutline />
        </Icon>
        Archivos
      </NavItem>
      <NavItem>
        <Icon color={"#ff5959"}>
          <IoGameControllerOutline />
        </Icon>
        Juegos
      </NavItem>
    </Nav>
  );
}

const Nav = styled.nav`
  background: ${({ theme }) => theme.body};
  padding: 20px;
  border-radius: 4px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > button {
    margin: 0 5px;
  }
`;

const NavItem = styled.button`
  border: 2.5px solid ${({ theme }) => theme.body};
  border-radius: 4px;
  background: ${({ theme }) => theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  font-weight: 600;
  font-size: 1em;
  transition: all 0.3s ease;
  cursor: pointer;

  & svg {
    margin-right: 6px;
  }

  &:hover {
    border: 2.5px solid ${({ theme }) => theme.text};
  }
`;

const Icon = styled.span`
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${({ color }: iconProps) => color};
  margin-right: 15px;

  & svg {
    margin: 0;
    font-size: 1.6em;
    stroke: ${({ theme }) => theme.text};
  }
`;
