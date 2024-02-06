import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn } from "../auth/components/LogIn";

import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import { Box } from "@mui/material";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onRegister = () => {
    navigate("/newuser", {
      replace: true,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        flexDirection: "column",
        gap: "8px",
        margin: "200px 0 0 0",
        alignItems: "center",
        height: "67vh",
      }}>
      <h1>Login</h1>

      <FormControl sx={{ m: 1, width: "25ch" }}>
        <OutlinedInput
          placeholder="Please enter user"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: "25ch" }}>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <div className="d-flex gap-2">
        <LogIn email={email} password={password} />
        <button className="btn btn-primary mt-2" onClick={onRegister}>
          Registro
        </button>
      </div>
    </Box>
  );
};
