import React from 'react'

import { Section, Container_title } from './Bemvindo.js'
import { Title,Text } from '../../../UI - Design System/Texts.js';

import MediaSocial from '../../../Layout/MediaSocial.jsx';


function Bemvindo() {
  return (
    <Section>
      <div>
        <Container_title>
          <Title>Seja Bem-vindo(a)</Title>
          <Text style={{fontSize: '3.2rem', marginTop: '1rem'}}>A Guina Rangers</Text>
        </Container_title>

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
        
        <button>Faça seu Cadastro!</button>
      </div>

      <div>
        <div style={{height: '100%', width: '100%'}}>
          Teste
        </div>
        <MediaSocial/>
      </div>
    </Section>
  );
}

export default Bemvindo;