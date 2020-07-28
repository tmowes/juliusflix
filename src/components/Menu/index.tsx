import React from 'react';
import {
  Container,
  NavigationMenu,
  HomeLink,
  Logo,
  AddVideoLink,
} from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <NavigationMenu>
        <HomeLink to='/'>
          <Logo />
        </HomeLink>
        <AddVideoLink to='/'>Novo Video</AddVideoLink>
      </NavigationMenu>
    </Container>
  );
};

export default Menu;
