import {BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import NotFound from "../components/Pages/NotFound/NotFound";
import TextEditor from "../components/Pages/TextEditor/TextEditor";

import Menu from '../components/Layout/Menu/Menu'
import Footer from '../components/Layout/Footer/Footer'

function RoutesWeb() {
    return (
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/textEditor" element={<TextEditor />} />
          <Route path="/register" element={<Register />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    );
};

export default RoutesWeb;