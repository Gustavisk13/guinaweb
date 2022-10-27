import Logo from '../../../images/logo.jpg'
import styles from './menu.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../Contexts/Auth/AuthContext'

function menu() {
	const auth = useContext(AuthContext);

	const handleLogout = async () => {
		await auth.signout();
    window.location.href = window.location.href; // fazendo um f5 na página
	};

  return (
    <header>
      <nav className={styles.navigation}>
        <div className={styles.wrapper}>
          <Link className={styles.logo} to="/">
            <img
              src={Logo}
              alt="Guina Rangers Logo"
              title="Logo_da_GuinaRangers"
            />
          </Link>

          <div className={styles.navigationMenu}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Sobre nós</a>
              </li>
              <li>
                <Link to="/TextEditor">Notícias</Link>
              </li>
              <li>
                <a href="#">Guinaverso</a>
              </li>
            </ul>
            {/* Se o usuário não estiver cadastrado, rederize esse botão */}
            {!auth.user && (
              <Link className={styles.menuButton} to="/signup">
                Register
              </Link>
            )}
            {/* Se o usuário estiver cadastrado, renderize esse outro */}
            {auth.user && (
              <Link className={styles.menuButton} onClick={handleLogout}>
                Sair
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default menu;