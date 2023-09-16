import { useRouteError } from "react-router-dom"




const ErrorBoundary = () => {

  const error: any  = useRouteError();
  // console.log(error);


  if (error.status === 404) {
    return <h1>Page Not Found</h1>
  }

  if (error.status === 500) {
    return <h1>Internal Server Error</h1>
  }

  if (error.status === 503) {
    return <h1>Bad Request</h1>
  }

  return
}

export default ErrorBoundary