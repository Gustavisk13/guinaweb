import Form from './components/FormLogin'
import styles from './Login.module.css';

function Login() {
  return (
    <>
      <div className={styles.wrapper}>           
        <Form />
      </div>
    </>
  );
}

export default Login;