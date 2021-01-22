import React from 'react';

import homeBackground from '../../assets/home-background.svg';

import { Container, Content, HomeDescription } from './styles';

const Home: React.FC = () => {
  return(
    <Container>
      <Content>
        <HomeDescription>
          <h1>Inovação, Design e <strong>Experiencia</strong></h1>
          <span>Sempre a frente em soluções digitais</span>

          <button>Saiba mais</button>
        </HomeDescription>
        
        <img src={homeBackground} alt=""/>
      </Content>
    </Container>
  )
}

export default Home;