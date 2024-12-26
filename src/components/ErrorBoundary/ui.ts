import { styled } from "@mui/material";

export const ErrorBoundaryContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  color: theme.palette.primary.light,
  fontFamily: theme.typography.fontFamily,
  "& h1": {
    textTransform: "uppercase",
  },
  "& h2": {
    textTransform: "uppercase",
    fontSize: "18px",
  },
  "& p": {
    fontSize: "18px",
  },
  "& button": {
    backgroundColor : theme.palette.primary.light,
    color:'black',
    padding: '8px 12px',
    cursor: 'pointer'
  },
}));
