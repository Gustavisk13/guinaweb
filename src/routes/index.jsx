import {BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "../components/Pages/Login/Login.jsx";
import SignUp from "../components/Pages/Register/Register.jsx";
import NotFound from "../components/Pages/NotFound/NotFound.jsx";
import TextEditor from "../components/Pages/TextEditor/TextEditor.jsx";

import Menu from '../components/Layout/NavBar/Menu.jsx'
import MenuMobile from "../components/Layout/NavBar/MenuMobile.jsx";
import Footer from '../components/Layout/Footer.jsx'
import { AuthProvider } from "../components/Contexts/Auth/AuthProvider";
import { RequireAuth } from "../components/Contexts/Auth/RequireAuth";
import { useState } from "react";

function RoutesWeb() {
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