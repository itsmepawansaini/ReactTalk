import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line no-unused-vars
import App from './App';
// eslint-disable-next-line no-unused-vars
import Register from './pages/Register';
// eslint-disable-next-line no-unused-vars
import Login from './pages/Login';
// eslint-disable-next-line no-unused-vars
import Sidebar from './components/Sidebar';
// eslint-disable-next-line no-unused-vars
import Chat from './components/Chat';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
