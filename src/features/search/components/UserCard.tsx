import {useLogin} from "../../../app/providers/loginProvider";
import {Avatar, Box, Button} from "@mui/material";

export function UserCard() {
  const { user, logout } = useLogin();
  function handleLogout(){
    logout();
  }
  return(
     <Box sx={{
       marginBlock: "20px",
     }}>
       <Avatar src='https://1avatara.ru/pic/animation/animation0036.gif' sx={{width: '100px', height: '100px'}}></Avatar>
       <p>Hello {user.name}</p>
       <p>Your email: {user.email}</p>
       <Button variant="outlined" onClick={handleLogout}>
         Logout
       </Button>
     </Box>
  )
}