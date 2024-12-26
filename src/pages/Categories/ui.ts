import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const CategoryContainer = styled("div")({
  display: "flex",
  //   flexDirection: "column",
  justifyContent: "baseline",
  alignItems: "center",
  gap: "4px",
  flexWrap: "wrap",
  backgroundColor: "palegoldenrod",
  margin: "10px",
  height: "auto",
  padding: "10px",
  borderRadius:'8px',
});

export const CategoryNavlink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  display: "flex",
  //   flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: theme.typography.fontFamily,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.light,
  fontWeight: "bold",
  width: "40dvh",
  borderRadius:'10px',
  // height: "20dvh",
  fontSize: "16px",
  padding: "12px",
  textTransform: "uppercase",
}));

export const CategoriesHead = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  

  "& h3": {
    fontSize: "20px",
    color: theme.palette.primary.light
  },
}));
