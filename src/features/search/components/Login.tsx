import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import {appRoutes} from "../../../app/router/routes";
import {useNavigate} from "react-router";
import {UserCard} from "../../user/components/UserCard";
import {useLogin} from "../../../app/hooks/hooks";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  // const [errorLogin, setErrorLogin] = useState('')
  const context = useLogin();
  if (!context) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  const { login, isLog, error} = context;
  const handleNavigate = () => {
    navigate(appRoutes.user)
  }
  const handleLogin = (e) => {
    e.preventDefault()
      login(email, password);
      handleNavigate()
  };

  if (isLog) {
    return <UserCard/>;
  }

  return (
    <Box
      sx={{
        marginBlock: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
      component='form'
      onSubmit={handleLogin}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          value={email}
          type='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      {error}
      <Box>
        <Button variant="outlined" type='submit'>
          Login
        </Button>
      </Box>
    </Box>
  );
}
