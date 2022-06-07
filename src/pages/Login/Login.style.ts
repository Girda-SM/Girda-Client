import { styled, TextField } from "@mui/material";

export const LoginPage = styled("div")({
  width: "100%",
  height: "100%",
  background: "linear-gradient(#A1FFCE, #FAFFD1)",
  justifyContent: "center",
  display: "flex",
});

export const UsernameField = styled(TextField)({
  width: "30vw",
  marginTop: "30vh",
  background: "white",
  height: "fit-content",
});
