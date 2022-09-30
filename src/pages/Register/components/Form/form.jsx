import styles from './styles/stylesForm.module.css'
import Button from '@mui/material/Button';

function form() {
  return (
    <>
        <form className={styles.container}>
          <header className={styles.titulo}>
            <p>Register</p>
          </header>
          <div className={styles.inputsContainer}>
            <div className={styles.boxinput}>
              <label htmlFor="Nome">Nome:</label>
              <input type="text" name="" id="" placeholder='Digite seu Nome' required/>
            </div>

            <div className={styles.boxinput}>
              <label htmlFor="Email">Email:</label>
              <input type="email" name="" id="" placeholder='Digite seu E-mail' required/>
            </div>

            <div className={styles.boxinput}>
              <label htmlFor="password">Senha:</label>
              <input type="password" name="" id="" placeholder='Digite sua Senha' required/>
            </div>

            <div className={styles.boxinput}>
              <label htmlFor="Confirmpassword">Confirmar Senha:</label>
              <input type="password" name="" id="" placeholder='Confirme sua Senha' required/>
            </div>
          </div>

          <Button sx={
            {
              background: '#D9D9D9',
              borderRadius: '0.5rem',
              width: '100%',
              height:'4.7rem',
              marginTop: '4rem',
              color: '#000000',
              fontWeight: '700',
              lineHeight: '1.5rem',
              fontSize: '1.6rem',
              padding: '2.5rem'
            }
            } variant="contained">REGISTRAR</Button>
        </form>
    </>
  );
};

export default form;