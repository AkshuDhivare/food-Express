import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      {alert("hi")}
      {error.message}
    </>
  );
}

export default ErrorBoundary;
