import styled from "styled-components";

export const ContainerInput = styled.input`
  width: 100%;
  height: 5rem;
  color: #000000;
  font-size: 1.8rem;
  border: none;
  border-radius: 0rem 0.5rem 0.5rem 0rem;
  background-color: rgba(194, 194, 194, 0.766);

  ::placeholder {
  color: #000000;
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 0.13rem;
  line-height: 1.7rem;
  }
  :focus {
    outline: none;
  }
`