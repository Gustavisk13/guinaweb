import React from 'react'
import { ContainerInput } from "./Input.js";

function Input({type, name, placeholder, handleOnChange, value}) {
  return (
    <>
      <ContainerInput
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        onChange={handleOnChange}
        value={value}
        autoComplete="on"
      />
    </>
  );
};

export default Input;