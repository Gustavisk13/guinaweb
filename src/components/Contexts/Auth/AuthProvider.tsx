import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { User } from "../../../types/User";
import { useApi } from "../../../Hooks/Api/useApi";
import { AuthContext } from "./AuthContext";


export const AuthProvider = ({ children }: { children: JSX.Element}) => {
  const [user, setUser] = useState<User | null>(null);
  
  const api = useApi();
  const navigate = useNavigate()

  // Verificando se existe um usuário logado.
  useEffect(() => {
    const storageDataUser = (localStorage.getItem("userData:"));
    const storageToken = localStorage.getItem("authToken:");
     
    if(storageDataUser && storageToken){
      setUser(JSON.parse(storageDataUser));
    }
  }, []);

  // Função responsável por fazer o registro do usuário.
  const signup = async(name: string, email: string, password: string) => {
    try{
      await api.signup(name, email, password);
      alert('Usuário Criado com Sucesso!');
      navigate('/signin');
    }catch(e){
      return e.response.data;
    }
  };

  // Função responsável por fazer o login e armazenar a response dos dados do usuário e token no LocalStorage.
  const signin = async (email: string, password: string) => {
    try{
      const data = await api.signin(email, password);
      if(data.user && data.token){
        setUser(data.user);
        localStorage.setItem('authToken:', data.token);
        localStorage.setItem('userData:', JSON.stringify(data.user));

        return true;
      }
    }catch(e){
      alert('Usuário não identificado!');
    };

    return false;
  };
  
  // Função responsável por deslogar o usuário
  const signout = () => {
    setUser(null); 
    localStorage.removeItem('authToken:') 
    localStorage.removeItem('userData:')
  };

  return (
    <AuthContext.Provider value={{ user, signin, signup, signout}}>
      {children}
    </AuthContext.Provider>
  );
};