import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sidebar from "./Sidebar";
import Main from "./Main";
import Author from "./Author";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="layout__container">
      <Sidebar />
      <Main />
      <Author />
    </div>
  </React.StrictMode>
);

