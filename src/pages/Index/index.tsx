import React from 'react';

import Header from '../../components/Header';
import Home from '../../components/Home';

import { Container, Content } from './styles';

const Index: React.FC = () => {
  return(
      <Container>
        <Header/>

        <Content>
          <Home/>
        </Content>
      </Container>
  )
}

export default Index;