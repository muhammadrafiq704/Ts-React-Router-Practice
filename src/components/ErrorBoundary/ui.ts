import { styled } from "@mui/material";

export const ErrorBoundaryContainer = styled('div')(({theme})=>({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    textTransform: 'uppercase',
}))