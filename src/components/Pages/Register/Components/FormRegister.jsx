import { useState, useContext } from "react";
import { AuthContext } from "../../../Contexts/Auth/AuthContext";

import SubmitButton from "../../../Form/SubmitButton";
import styles from "./FormRegister.module.css";
import Input from "../../../Form/Input";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfi, setPasswordConfi] = useState("");

  const auth = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name | !email | !password | !passwordConfi) {
      alert("Preencha todos os campos corretamente!!");
    } else if (password !== passwordConfi) {
      alert("As senhas não são iguais");
    } else {
      const sendData = await auth.signup(name, email, password);
  
      //tratando erros
      if(sendData.error){
        alert(sendData.error);
      }else if(sendData){
        alert(sendData[0].erro);
      }else{
        alert('Ocorreu um inesperado!');
      }
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <header className={styles.titulo}>
        <p>Register</p>
      </header>

      <div className={styles.inputsContainer}>
        <div className={styles.boxinput}>
          <Input
            type="text"
            text="Nome :"
            placeholder="Digite seu Nome"
            name="name"
            handleOnChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles.boxinput}>
          <Input
            type="email"
            text="Email :"
            placeholder="Digite seu E-mail"
            name="Email"
            handleOnChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.boxinput}>
          <Input
            type="password"
            text="Password :"
            placeholder="Digite sua Senha"
            name="password"
            handleOnChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.boxinput}>
          <Input
            type="password"
            text="Confirm Password :"
            placeholder="Confirme sua Senha"
            name="Confirmpassword"
            handleOnChange={(e) => setPasswordConfi(e.target.value)}
          />
        </div>

        <SubmitButton text="Cadastrar" />
      </div>
    </form>
  );
};

export default Form;