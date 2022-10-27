import { createContext } from "react";
import { User } from "../../../types/User";

export type AuthContextType = {
  user: User | null; // Vamos verificar se existe um usuário logado ou não, se não tiver vai receber null(ou seja, ele não está logado)
  signin: (email: string, password: string ) => Promise<boolean>; // função pra fazer o login, vc manda email e senha e ela vai retornar true or false, se deu certo ou se não deu certo a requisição.
  // signup:(name: string, email: string, password: string) => Promise<boolean>;
  signout: () => void; // função sem retorno, estamos apenas informando que vamos fazer logout
}

export const AuthContext = createContext<AuthContextType>(null!);
// Só preenchemos um Context com informações, lá no Provider
// O Context só é usado dentro de um Provider e o Provider vai Preencher o Context 