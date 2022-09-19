import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
    <App />
    <Footer/>
  </React.StrictMode>
);