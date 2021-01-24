import React from 'react';
import About from '../../components/About';
import Contato from '../../components/Contato';

import Header from '../../components/Header';
import Home from '../../components/Home';
import Porfolio from '../../components/Porfolio';
import Services from '../../components/Servic';

import { Container, Content } from './styles';

const Index: React.FC = () => {
  return(
      <Container>
        <Header/>

        <Content>
          <Home/>
          <About/>
          <Services/>
          <Porfolio/>
          <Contato/>
        </Content>
      </Container>
  )
}

export default Index;