import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-md font-semibold mb-4  ">This page does not exist</p>
      <p className="text-sm">{error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage
