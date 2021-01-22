import React from 'react';

import imageLogo from '../../assets/logo.png';

import { Container, NavBar, Nav, NavItem } from './styles';

const Header: React.FC = () => {
  return(
      <Container>
          <NavBar>
            <img src={imageLogo} alt="T10 Bank"/>
            <Nav>
              <NavItem>Home</NavItem>
              <NavItem>Sobre nós</NavItem>
              <NavItem>Serviços</NavItem>
              <NavItem>Portfólio</NavItem>
              <NavItem>Contato</NavItem>
            </Nav>
          </NavBar>
      </Container>
  )
}

export default Header;