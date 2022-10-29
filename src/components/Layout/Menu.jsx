import Logo from "../../images/logo.jpg";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Contexts/Auth/AuthContext";
import { GiHamburgerMenu } from "react-icons/gi";

function MenuDesktop({ setMenuIsVisible }) {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href; // fazendo um f5 na página
  };

  return (
    <>
      <div className={styles.containerMenu}>
        <Link className={styles.logo} to="/">
          <img
            src={Logo}
            alt="Guina Rangers Logo"
            title="Logo_da_GuinaRangers"
          />
        </Link>
        {/* <GiHamburgerMenu size={35} onClick={() => setMenuIsVisible(true)} /> */}
        <nav>
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
        </nav>
        {/* Se o usuário não estiver cadastrado, rederize esse botão */}
        {!auth.user && (
          <Link className={styles.menuButton} to="/signin">
            Login
          </Link>
        )}
        {/* Se o usuário estiver cadastrado, renderize esse outro */}
        {auth.user && (
          <Link className={styles.menuButton} onClick={handleLogout()}>
            Sair
          </Link>
        )}
      </div>
    </>
  );
}

export default MenuDesktop;
