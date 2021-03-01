import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function Input({
  half,
  name,
  label,
  handleChange,
  autoFocus,
  type,
  handleShowPassword,
}) {
  return (
    <Grid item xs={half ? "6" : "12"}>
      <TextField
        name={name}
        label={label}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        autoFocus={autoFocus}
        type={type}
        inputProps={
          name === "password" && {
            endAdornment: (
              <InputAdornment>
                {type === "password" ? (
                  <Visibility onClick={handleShowPassword} />
                ) : (
                  <VisibilityOff onClick={handleShowPassword} />
                )}
              </InputAdornment>
            ),
          }
        }
      />
    </Grid>
  );
}

export default Input;
