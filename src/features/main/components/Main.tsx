import { Box } from "@mui/material";

export function Main() {
  return (
    <Box
      component={"main"}
      sx={{
        display: "flex",
        justifyContent: "center",
        marginBlock: "20px",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <img
        src="https://rick-i-morty.online/wp-content/uploads/2021/06/5-sezon.jpg"
        alt=""
        width="494"
        height="741"
      />
    </Box>
  );
}
