import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

// sidebar main container
export const SideBarWrapper = styled("div")(({ theme }) => ({
  width: "300px",
  display: "flex",
  flexDirection: "column",
  overflowX: "hidden",
  overflowY: "auto",
  // alignItems: "center",
  padding: "10px",

  fontFamily: theme.typography.fontFamily,
}));

// for logo sidebar
export const SidebarLogo = styled("div")(({ theme }) => ({
  width: "280px",
  display: "flex",
  alignItems: "center",
  // padding: " 10px",
  justifyContent: "center",
  borderBottom: `1px solid ${theme.palette.primary.light}`,
  "& img": {
    height: 80,
    objectFit: "contain",
  },
}));

export const SidebarChild = styled(NavLink)(({ theme }) => ({
  display: "flex",
  // flexDirection: "column",
  justifyContent:'space-between',
  fontFamily: theme.typography.fontFamily,
  fontSize: 16,
  paddingLeft: "20px",
  fontWeight: "bold",
  alignItems: "center",
  textDecoration: "none",

  "&:hover": {
    color: theme.palette.primary.light, 
  },
  "& div": {
    display: 'flex',
    alignItems: "baseline",

  },
  // "& div": {

  // },
}));
