import React from 'react'
import Card from './Card/Card.jsx'


import {SubTitle,Text} from '../../../UI - Design System/Texts.js'
import {Cards, Wrapper} from './GuinaWeb.js'


export default function GuinaWeb() {

  return (
    <section>
      <Wrapper >

        <Cards >
            <Card text='GAMES'   type='GAMES'       />
            <Card text='RPG'     type='RPG'         />
            <Card text='HQ'      type='HQ'          />

            <Card text='NEWS'    type='NEWS'        />
            <Card text='FESTAS'  type='PARTY'       />
            <Card text='MÚSICAS' type='SMILEMOJI'   />
        </Cards>

        <article>
          <SubTitle>Guina Web</SubTitle>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </article>
      </Wrapper>
    </section>
  )
}