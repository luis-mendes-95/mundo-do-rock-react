import React from "react";
import FormLogin from "../../components/FormLogin";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Header from "../../components/Header";

const LoginPage = () => {
  return (
    <div className="Backgrounds.LoginPage">
      <Header/>
      <main className="main.MainLogin">
        <h1>Faça o Login</h1>
        <FormLogin />
      </main>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
