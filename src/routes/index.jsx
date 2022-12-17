// Funções
import { useState } from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../components/Contexts/Auth/AuthProvider";
import { RequireAuth } from "../components/Contexts/Auth/RequireAuth";

//Importação de páginas
import SignIn from "../components/Pages/Login/Login.jsx";
import SignUp from "../components/Pages/Register/Register.jsx";
import NotFound from "../components/Pages/NotFound/NotFound.jsx";
import TextEditor from "../components/Pages/TextEditor/TextEditor.jsx";
import Welcome from "../components/Pages/Welcome/Welcome.jsx";

//Componentes de Layouts
import Menu from '../components/Layout/NavBar/Menu.jsx'
import MenuMobile from "../components/Layout/NavBar/MenuMobile.jsx";
import Footer from '../components/Layout/Footer.jsx'


function RoutesWeb() {
  //Controle do menuMobile
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  
  return (
      <BrowserRouter>
        <AuthProvider>
          <Menu setMenuIsVisible={setMenuIsVisible} />
          <MenuMobile
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
          />

          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/welcome" element={<Welcome />} />

            <Route path="*" element={<NotFound />} />

            <Route
              path="/texteditor"
              element={
                <RequireAuth>
                  {" "}
                  <TextEditor />{" "}
                </RequireAuth>
              }
            />
          </Routes>

          <Footer />
        </AuthProvider>
      </BrowserRouter>
  );
};

export default RoutesWeb;