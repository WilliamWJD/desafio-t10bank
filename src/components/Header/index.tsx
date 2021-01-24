import React from 'react';

import imageLogo from '../../assets/logo.png';

import { Container, NavBar, Nav, NavItem } from './styles';

const Header: React.FC = () => {
  return(
      <Container>
          <NavBar>
            <img src={imageLogo} alt="T10 Bank"/>
            <Nav>
              <NavItem>
                <a href="#">Home</a>
              </NavItem>
              <NavItem>
                <a href="#sobre">Sobre nós</a>
              </NavItem>
              <NavItem>
                <a href="#services">Serviços</a>
              </NavItem>
              <NavItem>
                <a href="#portfolio">Portfólio</a>
              </NavItem>
              <NavItem>
                <a href="#contact">Contato</a>
              </NavItem>
            </Nav>
          </NavBar>
      </Container>
  )
}

export default Header;