import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export function useRouteErrorMessage() {
  const error = useRouteError();
  const errorMessage = isRouteErrorResponse(error)
    ? error.statusText
    : error instanceof Error
      ? error.message
      : "";

  return errorMessage;
}
