import {BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/index";
import NotFound from "../pages/NotFound/index";
import TextEditor from '../pages/TextEditor';

function RoutesWeb() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/textEditor" element={<TextEditor/>} />
                <Route path="*" element={<NotFound/>} />

            </Routes>
        </BrowserRouter>
    );
};

export default RoutesWeb;