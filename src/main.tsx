import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import routes from "./routes/routes.tsx";
import theme from "./theme/index.tsx";

const router = createBrowserRouter(createRoutesFromElements(routes))

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} fallbackElement={"loading..."} />
    </ThemeProvider>
  </StrictMode>
);
