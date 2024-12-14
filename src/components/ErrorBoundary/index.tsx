import React from "react";
import routes from "../../routes/routes";
import { useRouteError } from "react-router-dom";
import { ErrorBoundaryContainer } from "./ui";
import { Box } from "@mui/material";

const ErrorBoundary: React.FC = () => {
  const error = useRouteError();
  
  if (!routes) {
    return <div> something went worng! </div>;
  }

  return (
    <ErrorBoundaryContainer>
      {error ? <Box>Something Went Wrong!</Box> : null}
    </ErrorBoundaryContainer>
  );
};

export default ErrorBoundary;
