import styled from "styled-components";



export const Wrapper = styled.div`
  max-width: 180rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
`
 

export const Cards = styled.div`
  padding: 2rem;
  margin: 0 auto;
  margin-right: 5rem;
  display: flex;
  flex-wrap: wrap;

  gap: 4rem;
  
  border-right: 3px solid;
  /* background-color: black; */
`