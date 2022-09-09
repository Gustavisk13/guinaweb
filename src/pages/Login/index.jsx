import Formlogin from '../../components/Form/form';
import Welcome from '../../components/Welcome/welcome';

import styles from './styles.module.css';


function Login() {
  return (
    <>
      <div className={styles.wrapper}>
        <Welcome/>            
        <Formlogin/>
      </div>
    </>
  );
}

export default Login;