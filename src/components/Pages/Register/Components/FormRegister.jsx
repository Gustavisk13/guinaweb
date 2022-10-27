import styles from "./FormRegister.module.css";
import Input from "../../../Form/Input";
import SubmitButton from "../../../Form/SubmitButton";
import { useState } from "react";

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfi, setPasswordConfi] = useState('');

  function submit(e){
    e.preventDefault();
    if (!name | !email | !password | !passwordConfi) {
      alert("Preencha todos os campos corretamente!!");
    } else if (password !== passwordConfi) {
      alert("As senhas não são iguais");
    }
  }
  
// name.length == 0 && email.length == 0 && password.length == 0 && passwordConfi.length == 0 
//!name | !email | !password | !pass

  return (
    <form className={styles.container} onSubmit={submit}>
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