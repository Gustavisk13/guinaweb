import React from 'react'
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

import Login from "../../Pages/Login/Login.jsx";

export const RequireAuth = ({ children }: { children: JSX.Element}) => {
  const {user} = useContext(AuthContext);
  return !user ? <Login/> : children
}