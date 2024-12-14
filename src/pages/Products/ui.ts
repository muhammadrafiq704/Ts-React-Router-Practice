import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const ProductContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
}));
export const Navlink = styled(NavLink)({
  // flex : 1,
  textDecoration: "none",
  border: ` 1px solid`,
  margin: "10px",
  padding: "4px",
  borderRadius: "10px",
  backgroundColor: "palegoldenrod",
});
export const ProductImage = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  // gap:'10px',
  // margin: '10px',
  // padding:'10px',

  mixBlendMode: "color-burn",
  "& img": {
    width: 50,
    ObjectFit: "contain",
  },
}));

export const ProductContentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width:'100dvh',
  flexDirection: "column",
  marginTop: "-18px",
  // border: `1px solid ${theme.palette.primary.main}`,
  "& p": {
    color: theme.palette.primary.light,
    fontSize: "12px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  "& span": {
    color: theme.palette.primary.light,
  },
}));

export const UIButton = styled("button")(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.background.paper,
  padding: "4px 10px",
  cursor: "pointer",
}));
