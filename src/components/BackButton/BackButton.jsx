import { Link } from 'react-router-dom'

export const BackButton = () => {
  return (
    <>
      <Link
        to="/"
        className="rounded py-2 px-4 bg-grey-light font-semibold mt-4 w-250 text-center"
        data-testid="back-to-home"
      >
        Back with the Oompas
      </Link>
    </>
  )
}

export default BackButton
