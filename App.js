import {BrowserRouter, Routes, Route} from 'react-router-dom';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/text" element={<Login />} />
      </Routes>
     <div>Ola</div>
    </BrowserRouter>
  );
}
function Login() {
  return <div>Login</div>;
}