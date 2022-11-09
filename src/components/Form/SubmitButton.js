import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* background-color: black; */

  button{
    width: 100%;
    height: 5.5rem;
    margin-block: 2rem;
    position: relative;
    overflow: hidden;
    z-index: 0;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1.8rem;
    color: rgb(0, 0, 0);
    transition: all 1s;
    background-color:  rgba(194, 194, 194, 1);
  }

  button::before{
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 10px;
    width: 20px;
    height: 100%;
    z-index: -1;
    transition: all 2s;
    transform: translateX(-120px) skew(-20deg);
    background: linear-gradient(98deg, transparent, black);
  }

  button:hover::before{
    transform: translateX(420px) skew(-20deg);
  }

  button:hover{
    background: rgb(254,242,0);
    background: linear-gradient(90deg, rgba(254,242,0,0.8855917366946778) 0%, rgba(224,223,224,0.7175245098039216) 100%, rgba(0,212,255,1) 100%);
  }
`
