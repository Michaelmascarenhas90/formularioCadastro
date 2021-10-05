import React from "react";

import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

import "../style.css";

const InputFirstName = (InputFirstName) => {
  return (
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
          onChange={InputFirstName}
        />
      </InputLabel>
    </div>
  );
};

export default InputFirstName;
