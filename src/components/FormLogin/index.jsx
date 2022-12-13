import React from "react";
import * as headers from "../../styles/headers";
import * as main from "../../styles/main";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const FormLogin = () => {
  const { authenticated, login } = useContext(AuthContext);

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required("Informe o seu e-mail")
      .email("É necessário informar um e-mail válido"),
    password: yup.string().required("Insira sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submit = async (data) => {
    console.log(data);
    //puxa a response da API
    //Se a resposta for código positivo:
    //toast.success("Login realizado")

    /*setTimeout(function() {
            navigate(/dashboard)
        }, 2000)*/

    //Se não:
    //toast.error("Ops! Algo deu errado")
  };

  return (
    <form onSubmit={handleSubmit(submit)} noValidate>
      <label htmlFor="email">E-mail</label>
      <input
        placeholder="Digite seu e-mail"
        type="text"
        {...register("email")}
      />
      {errors.email?.message && (
        <p aria-label="error">{errors.email.message}</p>
      )}
      <label htmlFor="password">Senha</label>
      <input
        placeholder="Digite sua senha"
        type="password"
        {...register("password")}
      />
      <button type="submit">Entrar</button>
      <span>Ainda não possui uma conta?</span>
      <Link to="/register" style={{ width: "100%" }}>
        <button>Cadastre-se</button>
      </Link>
    </form>
  );
};

export default FormLogin;
