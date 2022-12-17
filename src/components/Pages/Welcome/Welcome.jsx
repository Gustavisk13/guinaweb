import React from 'react'

import { Container } from './Welcome'

import Bemvindo from './components/Bemvindo.jsx';
import GuinaWeb from './components/GuinaWeb.jsx';
import Staff from '../../Layout/Staff/Staff.jsx';
import WhyCreate from './components/WhyCreate.jsx';

function Welcome() {
  return (
    <Container>
      <Bemvindo />
      <GuinaWeb/>
      <WhyCreate/>
      <Staff/>
    </Container>
  );
}

export default Welcome