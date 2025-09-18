
import {Avatar, Box, Button, Typography} from "@mui/material";
import {useNavigate} from "react-router";
import {appRoutes} from "../../../app/router/routes";
import {useLogin} from "../../../app/hooks/hooks";

export function UserCard() {
  const context = useLogin()
  if(!context){
    throw new Error('error')
  }
  const { user, logout, isLog } = context;
  const navigate = useNavigate()
  function handleNavigate(){
    navigate(appRoutes.login)
  }
  function handleNavigateInError(){
    navigate(appRoutes.login)
  }

  function handleLogout(){
    logout();
    handleNavigate()
  }

  if(!isLog){
    return <Box sx={{display: 'flex', justifyContent: 'center', flexDirection:'column', alignItems: 'center', gap: '10px', marginBlock: '10px'}}>
      <Typography>неверный логин или пароль</Typography>
      <Button variant="outlined" onClick={handleNavigateInError}>
        Logout
      </Button>
    </Box>
  }
  return(
     <Box sx={{
       marginBlock: "20px",
     }}>
       <Avatar src='https://1avatara.ru/pic/animation/animation0036.gif' sx={{width: '100px', height: '100px'}}></Avatar>
       <p>Hello {user !== null ? user.name : null }</p>
       <p>Your email: {user !== null ? user.email : null}</p>
       <Button variant="outlined" onClick={handleLogout}>
         Logout
       </Button>
     </Box>
  )
}