import styled from 'styled-components'

export const containerMobileMenu = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 2;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  backdrop-filter: blur(5px);
  background: rgb(42, 42, 42);  /* caso o navegador não aceite o gradiente, ele vai ter essa outra cor como default */
  background: linear-gradient(35deg, rgba(0,0,0,0.9248074229691877) 0%, rgba(254,238,4,1) 95%);

.containerMobileMenu svg{
  color: black;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
}

.containerMobileMenu nav ul{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
  font-size: 2.5rem;
}

.containerMobileMenu nav ul li a{
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


.containerMobileMenu .menuButton{
  border-radius: 0.5rem;
  padding-block: 1.5rem;
  padding-inline: 3.5rem;
  background-color: rgb(218, 218, 218);
}

`