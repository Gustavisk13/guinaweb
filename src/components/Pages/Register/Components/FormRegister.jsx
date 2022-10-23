import styles from "./FormRegister.module.css";
import Input from "../../../Form/Input";
import SubmitButton from "../../../Form/SubmitButton";

function Form() {
  return (
    <form className={styles.container}>
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
          />
        </div>

        <div className={styles.boxinput}>
          <Input
            type="email"
            text="Email :"
            placeholder="Digite seu E-mail"
            name="Email"
          />
        </div>

        <div className={styles.boxinput}>
          <Input
            type="text"
            text="Password :"
            placeholder="Digite sua Senha"
            name="password"
          />
        </div>

        <SubmitButton text="Cadastrar" />
      </div>
    </form>
  );
}

export default Form;