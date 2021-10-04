import React, { Fragment } from "react";
// import { CircularProgress, TextField, InputAdornment, IconButton } from '@material-ui/core';
import useForm from "./hooks/useForm";

import Button from "@material-ui/core/Button";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import MenuItem from "@mui/material/MenuItem";

import "./assets/css/material-dashboard-react.css";
import "./style.css";

const idList = [
  { id: 1, value: "Vendedor" },
  { id: 2, value: "Analista de Crédito" },
  { id: 3, value: "AUX ADM" },
  { id: 4, value: "Analista Produção" },
  { id: 5, value: "Expedição" },
  { id: 6, value: "Faturista" },
  { id: 7, value: "ADMIN" },
  { id: 8, value: "Analista PCP" },
  { id: 9, value: "Vendedor P" },
  { id: 10, value: "Representante" },
];

function App() {
  const [{ values, loading }, handleChange, handleSubmit] = useForm();

  const enviarContato = () => {
    // alert(JSON.stringify(values));

    axios.post("").then((req) => req.send(values));
  };

  return (
    <Fragment className=".container-user">
      <h1 className="title">Cadastro de Usuários</h1>
      <form className="form-user" onSubmit={handleSubmit(enviarContato)}>
        <section className="form-control form-control-name">
          <div className="content-name">
            <InputLabel htmlFor="cpf">
              <TextField
                id="outlined-basic"
                label="CPF do Usúario"
                variant="filled"
                type="number"
                name="cpf"
                required={true}
                sx={{ m: 1, width: "30ch" }}
                className="input-login"
                fullWidth
                onChange={handleChange}
              />
            </InputLabel>
          </div>
        </section>
        <section className="form-control form-control-name">
          <div className="content-name">
            <InputLabel htmlFor="firstName">
              <TextField
                required={true}
                id="outlined-basic"
                label="Primeiro Nome:"
                variant="filled"
                color="primary"
                sx={{ m: 1, width: "20ch" }}
                type="text"
                className="input-login"
                name="firstName"
                onChange={handleChange}
              />
            </InputLabel>
          </div>
          <div className="content-name">
            <InputLabel htmlFor="lastName">
              <TextField
                required={true}
                id="outlined-basic"
                type="text"
                label="Último Nome:"
                variant="filled"
                name="lastName"
                sx={{ m: 1, width: "20ch" }}
                className="input-login"
                onChange={handleChange}
              />
            </InputLabel>
          </div>
        </section>
        <section variant="standard" className="form-control form-control-name">
          <div className="content-name">
            <InputLabel htmlFor="idType">
              <TextField
                required={true}
                id="outlined-select-currency"
                select
                label="Função"
                value={idList.value}
                variant="filled"
                sx={{ m: 1, width: "20ch" }}
                name="idType"
                className="input-login"
                onChange={handleChange}
              >
                {idList.map((item) => (
                  <MenuItem selected={item.id[1]} value={item.id} key={item.id}>
                    {item.value}
                  </MenuItem>
                ))}
              </TextField>
            </InputLabel>
          </div>
          <div className="content-name">
            <InputLabel htmlFor="protheusCode">
              <TextField
                required={true}
                id="outlined-basic"
                type="number"
                label="Cód. Protheus:"
                variant="filled"
                sx={{ m: 1, width: "20ch" }}
                name="protheusCode"
                placeholder="Código do Protheus"
                className="input-login"
                onChange={handleChange}
              />
            </InputLabel>
          </div>
          <div className="content-name">
            <InputLabel htmlFor="email">
              <TextField
                required={true}
                id="outlined-basic"
                variant="filled"
                label="Email"
                type="text"
                name="email"
                sx={{ m: 1, width: "25ch" }}
                placeholder="Email do Usúario"
                className="input-login input-email"
                onChange={handleChange}
              />
            </InputLabel>
            <div className="button-form">
              <Button
                variant="contained"
                color="info"
                size="large"
                endIcon={<SendIcon />}
                type="submit"
              >
                {loading ? "Cadastrando..." : "Cadastrar"}
              </Button>
            </div>
          </div>
        </section>
      </form>
    </Fragment>
  );
}

export default App;
