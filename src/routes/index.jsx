import {BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import MarkDowm from '../pages/MarkDownEditor';
import Ckeditor from "../components/Ckeditor";

function RoutesWeb() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/markdown" element={<MarkDowm/>} />
                <Route path="*" element={<NotFound/>} />

                <Route path="/text" element={<Ckeditor/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesWeb;