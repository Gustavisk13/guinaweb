import React from 'react'
import { useContext } from "react";
import Login from "../../Pages/Login/Login.jsx";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element}) => {
  // vamos acessar o contexto para buscar a informação 'se tem um usuário logado ou não'
    // se tiver usuário, significa que ele já passou pelas validações se não, vamos impedir sua visualização da página e direcionar ele para outra.
  const auth = useContext(AuthContext);

  // se eu não tenho usuário 
  if(!auth.user){
    return <Login/>; // quando ele return isso aqui, obviamente ele não vai retornar o children
  }
  return children;
}

// Precisamos acessar o Contexto para verificar se existe algum usuário, se tiver usuário 