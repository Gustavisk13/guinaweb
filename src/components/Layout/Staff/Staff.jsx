import React from 'react'
import {SubTitle} from '../../UI - Design System/Texts.js'
import Card from './Card.jsx'
import {ContainerStaffCards, Wrapper} from './Staff.js'


function Staff() {
  return (
    <section>
      <Wrapper >
        <SubTitle>Equipe Guina Rangers</SubTitle>
        
        <ContainerStaffCards>  
          <Card name="Gustavo" firstJob='Líder de Projeto' secondJob='Back-end'/>     
          <Card name="Vinicios" firstJob="Líder de Design Ui" secondJob="Front-end"/>     
          <Card name="Pedro" firstJob="Design Ui"/>     
          <Card name="Paulo" firstJob="Design LogoTipo" />     
          <Card name="Teo" firstJob="Design LogoTipo"/>     
          <Card name="João" firstJob="Editor"/>     
        </ContainerStaffCards>

      </Wrapper>
    </section>
  )
}

export default Staff