<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import WorkerSignUp from './components/WorkerSignUp.js';
import WorkerSignUp2 from './components/WorkerSignup2.js';
import WorkerSignUp3 from './components/WorkerSignup3.js';
import WorkerSignUp4 from './components/WorkerSignup4.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkerSignUp4 />
=======
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals.js";
import NavBar from "./components/NavBar.js";
import WorkerSignUp from "./components/WorkerSignUp.js";
import Login from "./components/Login.js";
import NavBar2 from "./components/NavBarLogin&SignUp.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar2 />
    <Login />
>>>>>>> bran
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
