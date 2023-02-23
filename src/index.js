import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Author from "./Author";
import Weather from "./Weather";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Weather />
  <Author />
  </React.StrictMode>
);

