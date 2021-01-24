import React from 'react';

import port1 from '../../assets/port1.png';
import port2 from '../../assets/port2.png';
import port3 from '../../assets/port3.png';

import { Container, Content, Item } from './styles';

const Porfolio: React.FC = () => {
  return(
      <Container id="portfolio">
          <h1>PORFÓLIO</h1>
          <strong>Meus trabalhos</strong>

          <Content>
            <Item>
              <img src={port1} alt="port1"/>
            </Item>
            <Item>
              <img src={port2} alt="port2"/>
            </Item>
            <Item>
              <img src={port3} alt="port3"/>
            </Item>
            <Item>
              <img src={port3} alt="port3"/>
            </Item>
          </Content>
      </Container>
  )
}

export default Porfolio;