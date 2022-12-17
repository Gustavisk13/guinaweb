//Importando Svgs
import GAMES from '../../../../../assets/Svgs/Games.svg'
import HQ from '../../../../../assets/Svgs/HQ.svg'
import NEWS from '../../../../../assets/Svgs/News.svg'
import PARTY from '../../../../../assets/Svgs/Party.svg'
import SMILEMOJI from '../../../../../assets/Svgs/SmileEmoji.svg'
import RPG from '../../../../../assets/Svgs/Sword.svg'


// Função responsável por retornar Icones(svg) por meio do seu tipo(type).
export default (type) => {
  const svgCards = {
    GAMES,
    HQ,
    NEWS,
    PARTY,
    SMILEMOJI,
    RPG,
  }

  return svgCards[type];
};