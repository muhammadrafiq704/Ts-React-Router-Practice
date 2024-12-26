import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const CategoriesError: React.FC = () => {
  const error = useRouteError();
  console.log("error categories loader", error);

  if (isRouteErrorResponse(error) && error.status === 401) {
    // the response json is automatically parsed to
    // `error.data`, you also have access to the status
    return (
      <div>
        <h1  style={{ color: "white" }}>{error.status}</h1>
        <h2  style={{ color: "white" }}>{error.data.sorry}</h2>
        <p style={{ color: "white" }}>
          Go ahead and email {error.data.hrEmail} if you feel like this is a
          mistake.
        </p>
      </div>
    );
  }

  // rethrow to let the parent error boundary handle it
  // when it's not a special case for this route
  throw error;
};

export default CategoriesError;
