import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './components/Menu/Menu';
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
    <App />
  </React.StrictMode>
);