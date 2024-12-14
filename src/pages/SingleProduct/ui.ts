import { styled } from "@mui/material";

export const SingleProductContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
});

export const SingleProductCard = styled("div")(({ theme }) => ({
  width: "200dvh",
  backgroundColor: "palegoldenrod",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: "10px",
  padding: "8px",
  margin: "4px",
  "& img": {
    height: 130,
    objectFit: "contain",
    mixBlendMode: "color-burn",
    justisfyContect: "center",
  },
  "& h2": {
    color: theme.palette.primary.light,
    fontSize: "24px",
  },
  "& h3": {
    color: theme.palette.primary.light,
    fontSize: "20px",
  },
  "& span": {
    color: theme.palette.primary.light,
    fontWeight: "bold",
    fontSize: "20px",
  },
  "& p": {
    color: "grey",
    fontSize: "12px",
  },
  "& small": {
    color: "grey",
    fontSize: "14px",
  },
}));
