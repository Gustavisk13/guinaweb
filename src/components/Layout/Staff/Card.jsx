import React from 'react'

import { Text } from '../../UI - Design System/Texts';
import CardImage from './CardImage';
import {StaffCard, Photo} from './Card.js'

function Card({name, firstJob, secondJob}) {
  return (
    <StaffCard >
      <Photo src={CardImage(name)} alt='Membro_Guina_Ranger'/>
      <div>
        <Text style={{fontWeight: '700'}}>{name}</Text>
        <Text style={{fontWeight: '400'}}>{firstJob}</Text>
        <Text style={{fontWeight: '400'}}>{secondJob}</Text>
      </div>
    </StaffCard>
  )
}

export default Card;