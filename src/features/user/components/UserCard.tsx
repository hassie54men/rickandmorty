import {Avatar, Box, Button} from "@mui/material";
import {useNavigate} from "react-router";
import {appRoutes} from "../../../app/router/routes";
import {useAuth} from "../../../app/hooks/useAuth";

export function UserCard() {
  const {user, logout} = useAuth()
  const navigate = useNavigate()


  if (!user) {
    navigate(appRoutes.login)
    return <div>No user</div>
  }

  return(
     <Box sx={{
       marginBlock: "20px",
     }}>
       <Avatar src='https://1avatara.ru/pic/animation/animation0036.gif' sx={{width: '100px', height: '100px'}}></Avatar>
       <p>Hello {user.name }</p>
       <p>Your email: {user.email}</p>
       <Button variant="outlined" onClick={logout}>
         Logout
       </Button>
     </Box>
  )
}