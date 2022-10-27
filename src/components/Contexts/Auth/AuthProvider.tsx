import { useEffect, useState } from "react";
import { useApi } from "../../../Hooks/Api/useApi";
import { User } from "../../../types/User";
import { AuthContext } from "./AuthContext";
import React from "react";

export const AuthProvider = ({ children }: { children: JSX.Element}) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  useEffect(() => {
    // Não é recomendado usar uma async dentro do useEffect, é necessário criar uma função dentro do mesmo.
    const validateToken = async () => {
      const storageData = localStorage.getItem('authToken');
      // Vamos verificar se existe algum dado no 'authToken'
      if(storageData){
        //Após isso, vamos verificar se esse 'dado' está de acordo com o da api.
        const data = await api.validateToken(storageData);
        //se ele validou o token, ele vai retornar os dados daquele usuário.
        if(data.user){
          setUser(data.user);
        }
      }
    } 
    validateToken()
  }, [api]);

  // Não vamos fazer a requisição para a Api diretamente aqui, colocando em cada função a URL diretamente, vamos usar um hook para isso.
  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    if(data.user && data.token){
      setUser(data.user) 
      setToken(data.token); // toda vez que fizermo o login, vamos salvar o token no localstore
      return true;
    }
    return false;
  };

  const signout = async () => {
    await api.logout(); // apenas avisando que o usuário está fazendo o logout
    setUser(null); // limpando o usuário de fato.
    setToken(''); // vamos limpar o localstorage também
  };

  //Função responsável por salvar o token
  const setToken = (token: string) => {
    localStorage.setItem('authToken: ', token)
  };
  //Toda vez que acessarmos a página, precisamos verificar se existe o localStorage e se existe o token lá
  return (
    
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};