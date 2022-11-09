import React from 'react'
import {Container} from './SubmitButton.js'

function SubmitButton({text}) {
  return (
    <Container>
      <button> {text} </button>
    </Container>
  ); 
};

export default SubmitButton;