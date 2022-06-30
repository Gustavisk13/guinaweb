import ScrollReveal from "scrollreveal";
import logo from "../../images/logo/logo.jpg";

import "../styles/login.css";

import "../styles/loginmobile.css";
import "..//styles/logindesktop.css";






ScrollReveal({origin: 'top',distance: '10px',duration: 700,}).reveal(".navigation-logo, .navigation-menu, .card, .form-login");


function openMenu(){
    document.querySelector('#container').classList.add('menu-expanded');
}

function closeMenu(){
    document.querySelector('#container').classList.remove('menu-expanded');
}


function Login() {
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
                                <li><a href="#">Calendário</a></li>
                                <li><a href="#">Guinaverso</a></li>
                            </ul>
                            <a className="menu-register-button" href="#">Register</a>
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
                    

                        <form className="container-form-login" action="">
                            <div className="form-login">
                                <header>
                                    <h1>Login</h1>
                                    <div>
                                        <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15"
                                        stroke="#FFC632"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M10 17L15 12L10 7"
                                        stroke="#FFC632"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M15 12H3"
                                        stroke="#FFC632"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                        </svg>
                                        <p>Entre com suas informações de cadastro</p>
                                    </div>
                                </header>


                                <div className="box-input">
                                    <label htmlFor="Email">Email:</label>
                                    <input type="Email" placeholder="Digite seu email" />
                                </div>

                                <div className="box-input">
                                    <label htmlFor="password">Senha:</label>
                                    <input type="password" placeholder="Digite sua senha" />
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
