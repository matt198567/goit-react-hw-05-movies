import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  color: green;
  &.active {
    color: blue;
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: red;
  }
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`;

export const Header = styled.header`
  background-color: azure;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 50px;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 10%) 2px 1px 0px 1px;
`;

export const NavHeader = styled.nav`
  padding: 16px 10px;
`;
