import React, { useContext } from 'react';
// import Logo from '../../images/logo.jpg';
import {  Container } from "./MenuMobile.js";

import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Contexts/Auth/AuthContext";
import { useEffect } from 'react';

function MenuMobile( { menuIsVisible, setMenuIsVisible }) {
    const auth = useContext(AuthContext);

    const handleLogout =  () => {
      auth.signout();
      window.location.href = window.location.href; // fazendo um f5 na página
    };
    
    useEffect(() => {
      document.body.style.overflow = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);


  return (
    <Container isVisible={ menuIsVisible }>
      {/* <Link className={styles.logo} to="/">
        <img src={Logo} alt="Guina Rangers Logo" title="Logo_da_GuinaRangers" />
      </Link> */}

      <IoClose size={45} onClick={() => setMenuIsVisible(false)} />

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
              <Link to="/signin">Login</Link>
            </li>
          )}
          {auth.user && (
            <li>
              <Link onClick={handleLogout}>Sair</Link>
            </li>
          )}
        </ul>
      </nav>
    </Container>
  );
}

export default MenuMobile;

//css escopado - o styled component nunca vai ir de encontro com outro arquivo