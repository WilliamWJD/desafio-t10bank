import React, { useState } from 'react';
import {MdClose, MdMenu} from  'react-icons/md';

import { Container, Nav, NavItem } from './styles';

interface IMenu{
  showMenu:boolean;
  openMenu():void;
}

const Menu: React.FC<IMenu> = ({ showMenu, openMenu }) => {
  return (
    <Container showMenu={showMenu} onClick={openMenu}>
      <MdMenu color="#fff" size={35}/> 

      <Nav showMenu={showMenu}>
        <MdClose color="#F97270" size={40} onClick={()=>openMenu}/>
  
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
    </Container>
  )
}

export default Menu;