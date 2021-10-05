import React from "react";

import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

const InputCPF = (InputCPF) => {
  return (
    <div className="content-name">
      <InputLabel htmlFor="cpf">
        <TextField
          id="outlined-basic"
          label="CPF do Usúario"
          variant="filled"
          type="number"
          name="cpf"
          required={true}
          sx={{ m: 1, width: "20ch" }}
          className="input-login"
          fullWidth
          onChange={InputCPF}
        />
      </InputLabel>
    </div>
  );
};

export default InputCPF;
