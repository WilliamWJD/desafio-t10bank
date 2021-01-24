import React from 'react';

import { Container } from './styles';

const Contato: React.FC = () => {
  return (
    <Container id="contact">
      <h1>CONTATO</h1>
      <strong>Envie sua mensagem</strong>

      <form>
        <input type="text" placeholder="Nome"/>
        <div>
          <input type="text" placeholder="Telefone"/>
          <input type="email" placeholder="E-mail"/>
        </div>
        <textarea placeholder="Mensagem"/>

        <button type="submit">Enviar</button>
      </form>
    </Container>
  )
}

export default Contato;