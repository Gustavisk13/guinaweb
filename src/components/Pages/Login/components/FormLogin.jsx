import { Link, Navigate } from "react-router-dom";

import Input from "../../../Form/Input";
import SubmitButton from "../../../Form/SubmitButton";


import styles from "./FormLogin.module.css";
import { BiLogIn } from 'react-icons/bi'
import { useContext, useState } from "react";
import { AuthContext } from "../../../Contexts/Auth/AuthContext";

import ReactLoading from 'react-loading'

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const auth = useContext(AuthContext);
  
  const handleLogin = async (e) => {
    e.preventDefault()
    if(email && password){
      const isLogged = await auth.signin(email, password); // vamos mandar para o contexto, o contexto vai mandar para a requisição e vai retornar somente true or false.
      if(isLogged){
        Navigate('texteditor');
      }else{
        console.log(isLogged)
        alert('Cadastro não identificado!')
      }
    }
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.formlogin}>
          <header>
            <h1>Login</h1>
            <div>
              <BiLogIn />
              <p>Entre com suas informações de cadastro</p>
            </div>
          </header>

          <div className={styles.boxinput}>
            <Input
              type="email"
              text="E-mail :"
              placeholder="Digite seu E-mail"
              handleOnChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.boxinput}>
            <Input
              type="password"
              text="Password :"
              placeholder="Digite sua password"
              handleOnChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <SubmitButton text="Entrar" />

          <div className={styles.notHaveCount}>
            <span>Não possui uma conta? </span>
            <Link to="/signup">Registre-se</Link>
          </div>
        </div>
      </form>
      {!handleLogin && <ReactLoading />}
    </>
  );
};

export default Form;