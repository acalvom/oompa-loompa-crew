import { useAppDispatch, useAppSelector } from '@/hooks/store'

import { setNextPage, setPreviousPage } from '@/redux/pagination/paginationSlice'

export const Pagination = () => {
  const dispatch = useAppDispatch()
  const { current: page, total } = useAppSelector((state) => state.pagination)

  const previousPage = () => dispatch(setPreviousPage())
  const nextPage = () => dispatch(setNextPage())

  return (
    <div className="flex flex-row justify-between pt-8 mb-4 border-t-2 border-grey-dark">
      <button
        className="bg-grey-dark text-white hover:bg-grey-light hover:text-grey-dark disabled:bg-gray-200  disabled:text-gray-500  font-bold py-2 px-4 rounded uppercase"
        onClick={previousPage}
        disabled={page === 1}
      >
        Previous
      </button>
      <span className="text-grey-dark uppercase">
        Page {page} of {total}
      </span>
      <button
        className="bg-grey-dark text-white hover:bg-grey-light hover:text-grey-dark disabled:bg-gray-200  disabled:text-gray-500  font-bold py-2 px-4 rounded uppercase"
        onClick={nextPage}
        disabled={page === total}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
