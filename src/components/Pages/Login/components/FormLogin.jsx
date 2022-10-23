import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


import API from "../../../Api/api";
import Input from "../../../Form/Input";
import SubmitButton from "../../../Form/SubmitButton";

import styles from "./FormLogin.module.css";
import { BiLogIn } from 'react-icons/bi'

function Form() {
  const [email, setEmail] = useState("");
  const [senha, setPassword] = useState("");

  // Navegar pela página
  const navigate = useNavigate();

  // Todas as conexões http é assícrono.
  const handleLogin = async (e) => {
    e.preventDefault(); //?

    const data = {
      email,
      senha,
    };

    // Toda conexão http tem que estar em um try cat, pois existe grande chance de dar erros
    try {
        console.log(data);
        // await é o ponto de espera da função assi.
        const response = await API.post("/auth", data);
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate("/textEditor");
    } catch (error) {
        alert("Deu ZIKA");
    }
    //usuários é a rota de criar usuários.
};

  return (
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
          />
        </div>

        <div className={styles.boxinput}>
          <Input
            type="password"
            text="Password :"
            placeholder="Digite sua Senha"
          />
        </div>

        <SubmitButton text="Entrar" />

        <div className={styles.notHaveCount}>
          <span>Não possui uma conta? </span>
          <Link to="/Register">Registre-se</Link>
        </div>
      </div>
    </form>
  );
};

export default Form;