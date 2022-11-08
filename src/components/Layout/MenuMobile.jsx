import React, { useContext } from 'react';
import Logo from '../../images/logo.jpg';
import MenuMobilestyles from './MenuMobile';

import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/Auth/AuthContext';


function MenuMobile({ menuIsVisible, setMenuIsVisible}) {
    const auth = useContext(AuthContext);

    const handleLogout = async () => {
      await auth.signout();
      window.location.href = window.location.href; // fazendo um f5 na página
    };
  return (
    <div className={styles.containerMobileMenu} openMenu={menuIsVisible}>
      {/* <Link className={styles.logo} to="/">
        <img src={Logo} alt="Guina Rangers Logo" title="Logo_da_GuinaRangers" />
      </Link> */}
      <IoClose size={35} onClick={() => setMenuIsVisible(false)} /> 
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
          {!auth.user && (
            <li>
              <Link className={styles.menuButton} to="/signin">
                Login
              </Link>
            </li>
          )}
          {auth.user && (
            <li>
              <Link className={styles.menuButton} onClick={handleLogout}>
                Sair
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default MenuMobile;

//css escopado - o styled component nunca vai ir de encontro com outro arquivo