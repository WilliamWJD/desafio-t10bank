import React, { useState } from 'react';
import designImage from '../../assets/designImage.svg';

import { Container, Content, ServicesDescription, ProgressDesign, Progress, ProgressDone } from './styles';

const Services: React.FC = () => {
  const [progressStatus, setProgressStatus] = useState(85);

  return(
    <Container id="services">
      <h1>SERVIÇOS</h1>
      <strong>Proporcionamos uma melhor experiência</strong>

      <Content>
        <ProgressDesign>
          <h1>{progressStatus}%</h1>

          <Progress>
            <ProgressDone progressStatus={progressStatus}/>
          </Progress>

          <span>Design UI</span>
          <p>Photoshop, Ilustrator</p>
        </ProgressDesign>

        <ServicesDescription>
          <img src={designImage} alt=""/>
          <h1>Design</h1>
          <p>Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam eirmod tempor dolore.</p>
          <button>Saiba mais</button>
        </ServicesDescription>
      </Content>
    </Container>
  )
}

export default Services;