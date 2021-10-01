import React from "react";
// import { CircularProgress, TextField, InputAdornment, IconButton } from '@material-ui/core';
import useForm from "./hooks/useForm";

import "./style.css";

const idList = [
  "Vendedor",
  "Analista de Crédito",
  "AUX ADM",
  "Analista Produção",
  "Expedição",
  "Faturista",
  "ADMIN",
  "Analista PCP",
  "Vendedor P",
  "Representante",
];

function App () {
  const [{ values, loading }, handleChange, handleSubmit] = useForm();

  const enviarContato = () => {
    alert(JSON.stringify(values));
  };

  return (
    <section className=".container-user">
      <form className="form-user" onSubmit={handleSubmit(enviarContato)}>
        <h1>Cadastro de Usuários</h1>
        <div className="form-control">
          <label htmlFor="cpf">
            CPF do Novo Usuário:
            <input
              className=".input-user"
              type="number"
              name="cpf"
              placeholder="CPF do Usúario"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="firstName">
            Nome:
            <input
              className=".input-user"
              type="text"
              name="firstName"
              placeholder="Primeiro Nome"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="lastName">
            Sobrenome:
            <input
              type="text"
              name="lastName"
              className=".input-user"
              placeholder="Ultimo Nome"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="idType">
            <select
              name="idType"
              className=".input-user"
              onChange={handleChange}
            >
              {idList.map((item, i) => (
                <option key={i}>{item}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="protheusCode">
            Codigo no Protheus:
            <input
              type="number"
              name="protheusCode"
              placeholder="Código do Protheus"
              className=".input-user"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="email">
            Email do Usuário:
            <input
              type="text"
              name="email"
              placeholder="Email do Usúario"
              className=".input-user"
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">{loading ? "Enviando..." : "Enviar"}</button>
      </form>
    </section>
  );
}

export default App;
