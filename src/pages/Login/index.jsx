import ScrollReveal from "scrollreveal";
import logo from "../../images/logo/logo.jpg";

import { useNavigate } from "react-router-dom";
import api from "../../config/api";
import React, { useState } from "react";

import "../styles/login/login.css";
import "../styles/login/loginmobile.css";
import "../styles/login/logindesktop.css";


ScrollReveal({origin: 'top',distance: '10px',duration: 700,}).reveal(".navigation-logo, .navigation-menu, .card, .form-login");


function openMenu(){
    document.querySelector('#container').classList.add('menu-expanded');
}

function closeMenu(){
    document.querySelector('#container').classList.remove('menu-expanded');
}


function Login() {

    const [email, setEmail] = useState("");
    const [senha, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            email,
            senha
        };
        try {
            console.log(data);
            const response = await api.post("/auth", data);
            localStorage.setItem("token", response.data.token);
            navigate.push("/text");
        } catch (error) {
            alert("Usuário ou senha inválidos");
        }
    }

  return (
    <>
        <div id="container">
            <nav className="navigation">
                
                    <div className="wrapper">

                        <a className="navigation-logo" href="#home">
                            <img src={logo} alt="Guina Rangers Logo" title="Logo_da_GuinaRangers" />
                        </a>
                        {/*<----- navigation-logo ----->*/}

                        <div className="navigation-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Sobre nós</a></li>
                                <li><a href="#">Notícias</a></li>
                                <li><a href="#">Guinaverso</a></li>
                                

                                <a className="menu-register-button" href="#">Register</a>
                            </ul>
                            
                        </div>
                        {/*<----- navigation-menu ----->*/}

                        <button className="open-menu"  onClick={openMenu}>
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 9H21" stroke="#00856F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M1 1H21" stroke="#00856F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 17L21 17" stroke="#00856F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        {/*<----- open-menu ----->*/}

                        <button className="close-menu" onClick={closeMenu}>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 1L1 21M1 1L21 21" stroke="#FFFAF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        {/*<----- close-menu ----->*/}

                    </div>
                    {/*<----- wrapper ----->*/}
            </nav>
            {/*<----- navigation ----->*/}


                <div className="container-aside-login">

                    <div className="wrapper">
                        <aside className="content">
                                <div className="card">
                                    <h2>Seja Bem-vindo&#40;a&#41;</h2>
                                    <p>A Guina Rangers</p>                       
                                </div>
                        </aside>
                    

                        <form className="container-form-login" onSubmit={handleLogin} >
                            <div className="form-login">
                                <header>
                                    <h1>Login</h1>
                                    <div>
                                    <svg 
                                        width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.0107 25.0801V3.58287H12.0061V0H24.0122V28.663H12.0061V25.0801H21.0107ZM10.5083 23.2923L18.0092 14.3315L10.5053 5.37431L8.38027 7.91099L12.2642 12.5401H0V16.1229H12.2642L8.38327 20.7556L10.5083 23.2923Z" fill="#E6B404"/>
                                    </svg>

                                        <p>Entre com suas informações de cadastro</p>
                                    </div>
                                </header>


                                <div className="box-input">
                                    <label htmlFor="Email">Email:</label>
                                    <input type="email" placeholder="Digite seu email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div className="box-input">
                                    <label htmlFor="password">Senha:</label>
                                    <input type="password" placeholder="Digite sua senha" className="input" value={senha} onChange={(e) => setPassword(e.target.value)}/>
                                </div>


                                <div className="box-check">
                                    <div>
                                        <input type="checkbox" />
                                        <label htmlFor="Lembre-me">Lembre-me</label>
                                    </div>

                                    <a className="login-links" href="#">Esqueci minha senha</a>
                                </div>

                                <div className="box-login-btn">
                                    <button>Entrar</button>
                                </div>

                                <span>Não possui uma conta? </span>
                                    <a className="login-links" href="#">Registre-se</a>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    </>
  );
}

export default Login;
