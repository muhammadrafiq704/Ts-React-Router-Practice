import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";
import { ErrorBoundaryContainer } from "./ui";

function ErrorBoundary() {
  const error = useRouteError();
 const navigate = useNavigate();
  // console.log("error", error);

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <ErrorBoundaryContainer>
          <h1>{error.statusText}</h1>
          <h2>{error.status}</h2>
          <p>
            Go ahead and email {error.data} if you feel like this is a mistake.
          </p>
          <button onClick={()=> navigate('/')}>
            Go Back
          </button>
      </ErrorBoundaryContainer>
    );
  }
  throw error;
}
export default ErrorBoundary;
