import React from 'react'
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

import Login from "../../Pages/Login/Login.jsx";
import ReactLoading from 'react-loading';

export const RequireAuth = ({ children }: { children: JSX.Element}) => {
  // vamos acessar o contexto para buscar a informação 'se tem um usuário logado ou não'
    // se tiver usuário, significa que ele já passou pelas validações, se não, vamos impedir sua visualização da página e direcionar-lo  para a login.
  const { loading, user} = useContext(AuthContext);

  // if(loading){
  //   console.log(loading)
  //   return <ReactLoading />
  // }

  // se eu não tenho usuário 
  return !user ? <Login/> : children
}