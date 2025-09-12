import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useLogin } from "../../../app/providers/loginProvider";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, logout, isLog, user } = useLogin();

  const handleLogin = () => {
    login(email, password);
  };

  if (isLog) {
    return <p>hello {user.name}</p>;
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
      <Box>
        <Button variant="outlined" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
}
