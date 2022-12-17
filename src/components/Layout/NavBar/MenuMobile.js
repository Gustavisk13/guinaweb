import styled, {css} from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  z-index: 5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(5px);
  background: rgb(42, 42, 42);  /* caso o navegador não aceite o gradiente, ele vai ter essa outra cor como default */
  background: linear-gradient(35deg, rgba(0,0,0,0.9248074229691877) 0%, rgba(254,238,4,1) 95%);
  
  opacity: 0;
  pointer-events: none;
  transition: 0.8s;
  transform: translateY(1000px);

  svg{
    color: black;
    position: absolute;
    top: 1.8rem;
    right: 2.5rem;
    cursor: pointer;
    transition: 0.5s;
    :hover{
      transform: rotate(90deg);
    }
  }

  nav ul{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5rem;
    font-size: 2.5rem;
  }

  nav ul li a{
    color: black;
  }

  .logo{
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
  .logo img {
    width: 20rem; 
  }


  // Vamos aplicar um css apenas quando o menu estiver aberto.
  ${({ isVisible }) => isVisible && css`
      opacity: 1;
      pointer-events: auto; // Pesquisar
      transition: 0.4s;
      transform: translateY(0px);
    `}
`