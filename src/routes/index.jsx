import {BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "../components/Pages/Login/Login";
import SignUp from "../components/Pages/Register/Register";
import NotFound from "../components/Pages/NotFound/NotFound";
import TextEditor from "../components/Pages/TextEditor/TextEditor";

import Menu from '../components/Layout/Menu/Menu'
import Footer from '../components/Layout/Footer/Footer'
import { AuthProvider } from "../components/Contexts/Auth/AuthProvider";
import { RequireAuth } from "../components/Contexts/Auth/RequireAuth";

function RoutesWeb() {
    return (
      <BrowserRouter>
        <AuthProvider>
          {/* // fazendo isso, agora temos acesso ao contexto de autenticação em toda a aplicação.
          // Podemos por exemplo, pegar a informação se o usuário está logado ou não. */}
          <Menu />

          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />

            {/* Vamos acessar primeiro o componente RequireAuth e dentro dele, vamos fazer uma verificação se o usuário está logado ou não, se estiver ele vai ver a página requisitada, se não, vamos direcionar ele para fazer o login. */}
            <Route path="/texteditor" element={ <RequireAuth> <TextEditor/> </RequireAuth> } />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    );
};

export default RoutesWeb;