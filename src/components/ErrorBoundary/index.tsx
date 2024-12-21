import React from "react";
import { useRouteError } from "react-router-dom";
import { ErrorBoundaryContainer } from "./ui";
import { Box } from "@mui/material";

const ErrorBoundary: React.FC = () => {
  const error = useRouteError();
  console.log("error", error);


  return (
    <ErrorBoundaryContainer>
      {error ? <Box>Something Went Wrong!</Box> : null}
    </ErrorBoundaryContainer>
  );
};

export default ErrorBoundary;
