import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

// sidebar main container
export const SideBarWrapper = styled("div")(({ theme }) => ({
  width: "200px",
  display: "flex",
  flexDirection: "column",
  overflowX: "hidden",
  overflowY: "auto",
  alignItems: "center",

  fontFamily: theme.typography.fontFamily,
}));

// for logo sidebar
export const SidebarLogo = styled("div")(({ theme }) => ({
  width: "130px",
  display: "flex",
  alignItems: "center",
  padding: " 10px",
  justifyContent: "center",
  borderBottom: `1px solid ${theme.palette.primary.light}`,
  "& img": {
    height: 40,
    objectFit: "contain",
  },
}));

// nav links side bar
export const NavLinkSection = styled("div")({
  flex: 1,
});

export const SidebarChild = styled(NavLink)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  fontFamily: theme.typography.fontFamily,
  fontSize: 12,
  fontWeight: "bold",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
}));
