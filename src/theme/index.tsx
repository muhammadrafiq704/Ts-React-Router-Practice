import { createTheme } from "@mui/material";

const theme = createTheme({
    palette:{
        mode:'dark',
        primary: {main: "#FFF0DC", light:'#F0BB78', dark: ""},
        button: {
            primary: "#F0BB78"
        },
        text:{
          primary: "#131010"
        },
        border:{
            primary: "#131010"
        },
    },
    typography:{
        fontSize: 8,
        fontFamily:"sans-serif"
    }

})

export default theme