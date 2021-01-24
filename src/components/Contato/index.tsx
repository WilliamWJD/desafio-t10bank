import React, { useCallback, useState } from 'react';

import { Container } from './styles';

const Contato: React.FC = () => {
  const [name, setName] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = useCallback((e:React.FormEvent) =>{
    e.preventDefault();

    let data = {
      name:name,
      telefone:telefone,
      email:email,
      mensagem:mensagem
    }

    console.log(data);

  },[])

  return (
    <Container id="contact">
      <h1>CONTATO</h1>
      <strong>Envie sua mensagem</strong>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nome" 
          required
          onChange={e=>setName(e.target.value)}
          value={name}
        />

        <div>
          <input 
            type="text" 
            placeholder="Telefone" 
            required
            onChange={e=>setTelefone(e.target.value)}
            value={telefone}
          />
          <input 
            type="email" 
            placeholder="E-mail" 
            required
            onChange={e=>setEmail(e.target.value)}
            value={email}
          />
        </div>

        <textarea 
          placeholder="Mensagem" 
          required
          onChange={e=>setMensagem(e.target.value)}
          value={mensagem}
        />

        <button type="submit">Enviar</button>
      </form>
    </Container>
  )
}

export default Contato;