import { useState } from "react";
import { Await, useNavigate } from "react-router";
import api from "../../../../components/Api/api";
import styles from "./styles.module.css";

function form() {
  const [email, setEmail] = useState("");
  const [senha, setPassword] = useState("");

  // Navegar pela página
  const navigate = useNavigate();

  // Todas as conexões http é assícrono.
  const handleLogin = async (e) => {
    e.preventDefault(); //?

    const data = {
      email,
      senha,
    };

    // Toda conexão http tem que estar em um try cat, pois existe grande chance de dar erros
    try {
        console.log(data);
        // await é o ponto de espera da função assi.
        const response = await api.post("/auth", data);
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate("/textEditor");
    } catch (error) {
        alert("Deu ZIKA");
    }
    // /usuários é a rota de criar usuários.
};

  return (
    <>
      <form className={styles.containerformlogin} onSubmit={handleLogin} >
        <div className={styles.formlogin}>
          <header>
            <h1>Login</h1>
            <div>
              <svg
                width="25"
                height="29"
                viewBox="0 0 25 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.0107 25.0801V3.58287H12.0061V0H24.0122V28.663H12.0061V25.0801H21.0107ZM10.5083 23.2923L18.0092 14.3315L10.5053 5.37431L8.38027 7.91099L12.2642 12.5401H0V16.1229H12.2642L8.38327 20.7556L10.5083 23.2923Z"
                  fill="#E6B404"
                />
              </svg>

              <p>Entre com suas informações de cadastro</p>
            </div>
          </header>

          <div className={styles.boxinput}>
            <label htmlFor="Email">Email:</label>
            <input type="Email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Digite seu email" />
          </div>

          <div className={styles.boxinput}>
            <label htmlFor="password">Senha:</label>
            <input type="password" value={senha} onChange={(e)=> setPassword(e.target.value)} placeholder="Digite sua senha" />
          </div>

          <div className={styles.checkbox}>
            <div>
              <input type="checkbox" />
              <label htmlFor="Lembre-me">Lembre-me</label>
            </div>

            <a className={styles.links} href="#">
              Esqueci minha senha
            </a>
          </div>

          <div className={styles.boxloginbtn}>
            <button>Entrar</button>
          </div>

          <div className={styles.notHaveCount}>
            <span>Não possui uma conta? </span>
            <a className={styles.links} href="#">
              Registre-se
            </a>
          </div>
        </div>
      </form>
    </>
  );
}

export default form;
