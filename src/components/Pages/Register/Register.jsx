import FormRegister from './Components/FormRegister';
import styles from './Register.module.css'

function Register() {
  return (
    <>
      <main className={styles.conteudoPrincipal}>
        <FormRegister />
      </main>
    </>
  );
}

export default Register;