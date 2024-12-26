import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const SingleCategoryContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  padding: "10px",
  backgroundColor: "palegoldenrod",
  margin: "10px",
  borderRadius:'8px',
})

export const CategoryNavlink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  display: "flex",
  padding: '4px',
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: theme.typography.fontFamily,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.light,
  borderRadius: '16px',
  marginBottom: "10px",
  '& h4':{
    fontSize: "16px",
    textTransform: 'uppercase',
  },
  '& p':{
    fontSize: "12px",
    color: theme.palette.primary.light,
  },
  '& span':{
    fontSize: "14px",
    fontWeight: "bold",
    color: "orange",
  },
}));
