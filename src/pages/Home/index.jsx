import '../styles/form.css';

function Login() {

    return(
        <div className="container">
           <div className="container-login">
                    <form className="form-login" action="">
                        <div className='cabecalho'>
                            
                                <h1>Login</h1>
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke="#FFC632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10 17L15 12L10 7" stroke="#FFC632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15 12H3" stroke="#FFC632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                <p>Entre com suas informações de cadastro</p>
                            </div>
                        </div>
                    
                        <div className="wrap-input">
                            <label htmlFor="Email" >Email:</label>
                            <input type="Email" placeholder="Digite seu email" />
                        </div>

                        

                        <div className="wrap-input">
                            <label htmlFor="password" >Senha:</label>
                            <input type="password" placeholder="Digite sua senha" />
                        </div>

                        <div className='Lembre-me-check'>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="Lembre-me">Lembre-me</label>
                            </div>

                            <a href="#">Esqueci minha senha</a>
                        </div>

                        <div className="container-form-login-btn">
                            <button className="form-login-btn">Entrar</button>
                        </div>

                        <span>Não possui uma conta?  </span><a href="#">Registre-se</a>
                    </form>
                
           </div>
        </div>
    )
    
}

export default Login;