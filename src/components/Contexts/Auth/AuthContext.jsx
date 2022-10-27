// Só preenchemos um Context com informações, lá no Provider
// O Context só é usado dentro de um Provider e o Provider vai Preencher o Context 

import { createContext } from "react";

export const AuthContext = createContext({});