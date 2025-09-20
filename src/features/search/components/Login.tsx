import { Box, Button, TextField } from "@mui/material";
import {type FormEvent, useState} from "react";
import {appRoutes} from "../../../app/router/routes";
import {useNavigate} from "react-router";
import {useLogin} from "../../../app/hooks/hooks";
interface Filed {
  value: string,
  error: string | null
}

export function Login() {
  const [email, setEmail] = useState<Filed>({value: '', error: null});
  const [password, setPassword] = useState<Filed>({value: '', error: null});
  const [error, setError] = useState()
  const navigate = useNavigate()
  const { login} = useLogin();
  const handleLogin = (e:FormEvent) => {
    e.preventDefault()
      login?.(email.value, password.value).then((res) => {
        console.log(res)
        navigate(appRoutes.user)
      }).catch(e => {
        setError(e)
      })
  };

  const handleEmailChange = (e: { target: { value: string; }; }) => {
    const value = e.target.value
    let error = null
    if (!value){
      error = 'Поле не должно быть пустым'
    }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
      error = 'Неправильный формат email'
    } else {
      error = null
    }
    setEmail({value, error})
  }

  const handlePasswordChange = (e: { target: { value: string; }; }) => {
    const value = e.target.value
    let error = null
    if (!value){
      error = 'Поле не должно быть пустым'
    } else if (!/.{5,}/.test(value.trim())) {
      error = 'Пароль должен содержать не менее 5 символов'
    } else {
      error = null
    }
    setPassword({value, error})
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
      <Box sx={{ display: "flex", justifyContent: "center"}}>
        <TextField
          id="email "
          label="Email"
          variant="outlined"
          value={email.value}
          type='email'
          onChange={handleEmailChange}
          helperText={email.error}
          error={!!email.error}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type='password'
          value={password.value}
          onChange={handlePasswordChange}
          helperText={password.error}
          error={!!password.error}
        />
      </Box>
      <div>{error}</div>
      <Box>
        <Button variant="outlined" type='submit'>
          Login
        </Button>
      </Box>
    </Box>
  );
}
