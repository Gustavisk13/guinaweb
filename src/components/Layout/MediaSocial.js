import styled from "styled-components";

export const ContainerMediaSocial = styled.div`
   ul{
    margin-right: 2rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;

    /* background-color: black; */
  }

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: blueviolet; */
  }

  svg{
    font-size: 2.5rem;
    cursor: pointer;
    fill: white;
    transition: color 0.5s;
    :hover{
      fill: #E6B404;
    }
  }
`