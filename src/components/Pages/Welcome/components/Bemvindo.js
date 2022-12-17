import styled from "styled-components";

export const Section = styled.section`
  max-width: 180rem;
  margin: 0 auto;
  margin-block: 15rem 30rem;


  display: grid;
  grid-template-columns: 0.5fr 1fr;


  /* background-color: black; */

  button{
    padding: 1.5rem;
    margin-top: 10rem;
    border: none;
    background: rgba(255, 253, 253, 0.6);
    border-radius: 5px;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    text-shadow: 0px 5px 15px #000000;
    cursor: pointer;
    transition: all 0.5s;

    :hover{
      color: black;
      background-color: aliceblue;
      box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.3);

    }
  }

  div:nth-of-type(2){
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    /* background-color: #FFFFFF; */
  }
`
export const Container_title = styled.div`
  margin-block: 0rem 7rem;

`