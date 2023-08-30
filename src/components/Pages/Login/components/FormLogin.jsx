import { Link, useNavigate } from "react-router-dom";

import Input from "../../../Form/Input.jsx";
import SubmitButton from "../../../Form/SubmitButton.jsx";

import styles from "./FormLogin.module.css";
import { BiLogIn } from "react-icons/bi";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Contexts/Auth/AuthContext";

import { HiOutlineMail } from "react-icons/hi";
import { AiFillLock } from "react-icons/ai";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  // Enviando informações para Api para fazer o Login.
  const handleLogin = async (e) => {
    e.preventDefault();
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        navigate("/texteditor");
      }
    }
  };

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
            <label htmlFor="Email">Email:</label>

            <div className={styles.boxinput_container}>
              <div className={styles.icon_Input}>
                <HiOutlineMail size={30} />
              </div>

              <Input
                type="email"
                placeholder="Digite seu E-mail"
                handleOnChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.boxinput}>
            <label htmlFor="password">Password:</label>

            <div className={styles.boxinput_container}>
              <div className={styles.icon_Input}>
                <AiFillLock size={30} />
              </div>

              <Input
                type="password"
                placeholder="Digite sua Senha"
                handleOnChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <SubmitButton text="Funcionou Caralho" />

          <div className={styles.notHaveCount}>
            <span>Não possui uma conta? </span>
            <Link to="/signup">Registre-se</Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
