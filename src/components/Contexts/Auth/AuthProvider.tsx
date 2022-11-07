import { useEffect, useState } from "react";
import { useApi } from "../../../Hooks/Api/useApi";
import { User } from "../../../types/User";
import { AuthContext } from "./AuthContext";
import React from "react";

export const AuthProvider = ({ children }: { children: JSX.Element}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true)
  const api = useApi();

  // Verificando se existe um usuário logado.
  useEffect(() => {
    const storageDataUser = (localStorage.getItem("userData:"));
    const storageToken = localStorage.getItem("authToken:");
     
    if(storageDataUser && storageToken){
      setUser(JSON.parse(storageDataUser));
      setLoading(false)
    }
  }, []);
// TLAin159@

  const signup = async(name: string, email: string, password: string) => {
    const response = await api.signup(name, email, password)
    console.log(response)
    if(response){
      console.log(response)
      return true
    }
    return false
  }

  // Função responsável por fazer o login e armazenar a response dos dados do usuário e token no LocalStorage.
  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    if(data.user && data.token){
      setUser(data.user);
      localStorage.setItem('authToken:', data.token);
      localStorage.setItem('userData:', JSON.stringify(data.user));
      return true;
    }
    return false;
  };
  
  const signout = () => {
    setUser(null); 
    localStorage.removeItem('authToken:') 
    localStorage.removeItem('userData:')
  };



  return (
    <AuthContext.Provider value={{ user, signin, loading, signup, signout}}>
      {children}
    </AuthContext.Provider>
  );
};