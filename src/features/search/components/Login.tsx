import {Box, Button, TextField} from "@mui/material";
import {type FormEvent, useState} from "react";
import {appRoutes} from "../../../app/router/routes";
import {useNavigate} from "react-router";
import {useAuth} from "../../../app/hooks/useAuth";

interface Filed {
  value: string,
  error: string | null
}


export function Login() {
  const [email, setEmail] = useState<Filed>({value: '', error: null});
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)
  const {login} = useAuth();

  const handleLogin =  (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    login?.(email.value, password).then((res) => {
      console.log(res)
      navigate(appRoutes.user)
    }).catch(err => {
      console.log(err)
      setError(err)
    })

  };

  const handleEmailChange = (e) => {

    const value = e.target.value
    let error = null
    if (!value) {
     error = 'Поле не должно быть пустым'
    } else if (!value.includes('@')) {
      error = 'Не правильный email'
    }else {
      error = null
    }
    setEmail({value, error})

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
      <Box sx={{ display: "flex", justifyContent: "center", flexDirection: 'column', gap: 2}}>
        <TextField
          error={!!email.error}
          helperText={email.error}
          id="email "
          label="Email"
          variant="outlined"
          value={email.value}
          type='email'
          onChange={handleEmailChange}
        />
        <TextField
            error={!!error}
            helperText={error}
          id="password"
          label="Password"
          variant="outlined"
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <div>{error}</div>
      <Box>
        <Button  variant="outlined" type='submit'>
          Login
        </Button>
      </Box>
    </Box>
  );
}
