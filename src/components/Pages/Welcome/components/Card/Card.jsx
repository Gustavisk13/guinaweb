import React from 'react'

//Importando Styles.
import { Text } from '../../../../UI - Design System/Texts.js';
import { StyleCard } from './Card.js'

//Importando função para retornar icones por meio do type proveniente do componente.
import IconesCard from './IconesCard.js';


//Componente responsável por mostrar um card contendo um Icone e um texto pequeno de forma dinâmica.
function Card({type, textIcone, text}) {
  return (
    <StyleCard>
    <img src={IconesCard(type)} alt={`${textIcone}_Icone`} />
      <Text>{text}</Text>
    </StyleCard>
  )
}

export default Card;