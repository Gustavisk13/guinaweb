import {BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Ckeditor from "../components/Ckeditor";

export default function RoutesWeb() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="*" element={<NotFound/>} />

                <Route path="/text" element={<Ckeditor/>} />
            </Routes>
        </BrowserRouter>
    );
};