import React, { useCallback, useState } from 'react';
import imageLogo from '../../assets/logo.png';

import Menu from '../Menu';

import { Container, NavBar, Nav, NavItem } from './styles';

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = useCallback(()=>{
    setShowMenu(!showMenu);
  },[showMenu])

  return(
      <Container>
          <NavBar>
            <img src={imageLogo} alt="T10 Bank"/>

              <Menu
                showMenu={showMenu}
                openMenu={openMenu}
              />

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