import React from 'react';

import imageAbout from '../../assets/imageAbout.png';

import { Container, Content, AboutDescription } from './styles';

const About: React.FC = () => {
  return(
      <Container id="sobre">
          <h1>SOBRE NÓS</h1>
          <Content>
            <img src={imageAbout} alt="About"/>
            <AboutDescription>
              <h1>Qual o seu próximo projeto ?</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat consequat mauris nunc congue nisi. Lorem ipsum dolor sit amet. Ut diam quam nulla porttitor massa id neque.</p>
              <button>Download CV</button>
            </AboutDescription>
          </Content>
      </Container>
  )
}

export default About;