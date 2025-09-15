import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useLogin } from "../../../app/providers/loginProvider";
import {UserCard} from "./UserCard";
import {appRoutes} from "../../../app/router/routes";
import {useNavigate} from "react-router";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')
  const navigate = useNavigate()
  // const [errorLogin, setErrorLogin] = useState('')
  const { login, isLog} = useLogin();
  const nandleNavigate = () => {
    navigate(appRoutes.user)
  }
  const handleLogin = () => {
    const adminEmail: string = "admin";
    const adminPassword: string = "admin";
    if(email === '' || password === ''){
      setError('Введите логин и пароль')
      return
    }
    if (email !== adminEmail || password !== adminPassword){
      setError('Неправильный логин или пароль')
      return
    }
    setError('')
    login(email, password);
    nandleNavigate()


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
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      {error}
      <Box>
        <Button variant="outlined" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
}
