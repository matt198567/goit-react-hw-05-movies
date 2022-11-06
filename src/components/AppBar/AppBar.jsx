import { NavItem, Header, NavHeader } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <NavHeader>
        <NavItem to="home">Home</NavItem>
        <NavItem to="movies">Movies</NavItem>
      </NavHeader>
    </Header>
  );
};
