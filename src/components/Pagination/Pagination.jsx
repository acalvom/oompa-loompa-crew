import { useAppDispatch, useAppSelector } from '@/hooks/store'
import { setNextPage, setPreviousPage } from '@/redux/pagination/paginationSlice'

// TODO: Cypress test
// TODO: Button tests
// TODO: Loading tests

export const Pagination = () => {
  const dispatch = useAppDispatch()
  const { current: page, total } = useAppSelector((state) => state.pagination)

  const previousPage = () => dispatch(setPreviousPage())
  const nextPage = () => dispatch(setNextPage())

  return (
    <>
      <span className="text-grey-dark uppercase text-right sm:hidden">
        Page {page} of {total}
      </span>
      <div className="flex flex-row justify-between pt-8 mb-4 border-t-2 border-grey-dark">
        <button
          className="min-w-115 bg-grey-dark text-white hover:bg-grey-light hover:text-grey-dark disabled:bg-gray-200  disabled:text-gray-500  font-bold py-2 px-4 rounded uppercase"
          onClick={previousPage}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className=" hidden sm:text-grey-dark sm:uppercase sm:block">
          Page {page} of {total}
        </span>
        <button
          className="min-w-115 bg-grey-dark text-white hover:bg-grey-light hover:text-grey-dark disabled:bg-gray-200  disabled:text-gray-500  font-bold py-2 px-4 rounded uppercase"
          onClick={nextPage}
          disabled={page === total}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default Pagination
