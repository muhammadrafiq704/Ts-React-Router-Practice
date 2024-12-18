import {  styled } from "@mui/material";

export const ProductContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
});

export const ProductCard = styled('div')({
  // flex : 1,
  textDecoration: "none",
  border: ` 1px solid`,
  margin: "10px",
  padding: "4px",
  borderRadius: "10px",
  backgroundColor: "palegoldenrod",
});
export const ProductImage = styled("div") ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  // gap:'10px',
  // margin: '10px',
  // padding:'10px',

  mixBlendMode: "color-burn",
  "& img": {
    width: 64,
    ObjectFit: "contain",
  },
});

export const ProductContentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width:'150dvh',
  flexDirection: "column",
  marginTop: "-18px",
  // border: `1px solid ${theme.palette.primary.main}`,
  "& p": {
    color: theme.palette.primary.light,
    fontSize: "24px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  "& span": {
    color: theme.palette.primary.light,
    fontSize: '14px'
  },
}));
export const UIButtonContainer = styled('div')({
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
  
})
export const UIButton = styled("button")(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.background.paper,
  padding: "10px 14px",
  cursor: "pointer",
  textTransform:'uppercase'
}));

export const FormContentContainer = styled('div')({
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor: "palegoldenrod",
  margin: "10px"
})

export const FormContainer = styled("div")(({theme})=>({
  fontFamily: theme.typography.fontFamily,
  fontSize:'10px',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  gap:'10px',
  padding:'24px',
  width: "100dvh",
 
  '& input': {
    width:'100dvh',
    padding:'16px',
    borderRadius:'8px',
    
  },
  '& label': {
    fontSize: '16px',
    
  },
  '& h3': {
    fontSize: '24px',
    marginBottom : "-10px",
    color: theme.palette.primary.light
  },
  '& button': {
    fontSize: '16px',
    marginBottom : "-10px",
    padding: "16px",
    fontWieght:'bold',
    textTransform: "uppercase",
    color: theme.palette.primary.light
  },

}))