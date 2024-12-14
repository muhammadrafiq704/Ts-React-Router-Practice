import { styled } from "@mui/material";

export const LayoutContainer = styled("div")(({ theme }) => ({
  maxHeight: "100dvh",
  minHeight: "100dvh",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
}));

export const LayoutChilContainer = styled("div")(({ theme }) => ({
  flex: 1,
  overflowY: "auto",
  overflowX: "hidden",
  backgroundColor: theme.palette.primary.light,
}));
