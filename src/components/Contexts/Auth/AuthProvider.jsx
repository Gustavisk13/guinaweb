import React from "react";
import { useState } from "react";
import API from "../../../Hooks/Api/api";

export const AuthProvider = ({ children }) => {
  //Precisamos armazenar em algum local a informação se o usuário está logado ou não.
  const [user, setUser] = useState(null);

  const signIn = async ({ email, password }) => {
    const response = await API.post("/auth", {
      email,
      password,
    });
    // Após isso, precisamos também verificar se houve algum erro na hora da autenticação
    // caso sim, precisamos retornar essa informação ao usuário.
    // também não podemos deixar os dados referente ao token serem salvos.
    // if(response.data.error){
    //   alert(response.data.error);
    // }else{
    //   setUser(response.data);

    //   //Vamos buscar o 'token' da resposta do servidor
    //   const { token } = response.data;
    //   // Vamos salvar dentro do LocalStorage o nosso 'token' dentro de '@Auth: Token'
    //   localStorage.setItem("@Auth: Token", token);
    // }
    try {
      setUser(response.data);
      localStorage.setItem("@Auth: Token", response.data.token);
    } catch (error) {
      alert(error);
    }
  };

  return (
    //Esse 'Provider' significa que queremos prover dados para outro locais da nossa Aplicação.
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// O provider vai usar o Context para criar um globo em volta da aplicação, logo vamos ter acesso dentro da aplicação a todos os dados Proveniente do Context