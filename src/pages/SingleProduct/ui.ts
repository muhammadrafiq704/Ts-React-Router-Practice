import {  styled } from "@mui/material";

export const SingleProductContainer = styled("div")({
    display:'flex',
    justifyContent:'center'
})

export const SingleProductCard = styled("div")(({theme})=>({
    width: '150dvh',
     backgroundColor: 'palegoldenrod',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    borderRadius:'10px',
    padding: '8px',
    margin: '4px',
    '& img':{
        height: 100, 
        objectFit: 'contain',
        mixBlendMode: 'color-burn',
        justisfyContect:'center'
    },
    '& h2':{
        color: theme.palette.primary.light,
    },
    '& h3':{
        color: theme.palette.primary.light,
    },
    '& span':{
        color: theme.palette.primary.light,
        fontWeight: 'bold',
    },
    '& p':{
        color: 'grey',
    },
    '& small':{
        color: 'grey',
    }
}))