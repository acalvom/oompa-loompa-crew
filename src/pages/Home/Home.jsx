import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/store'
import { getOompas } from '@/redux/oompas/oompasSlice'
import { getPageOompas } from '@/services'
import { Layout } from '@/layout'
import { Grid } from '@/components/Grid'
import { setNextPage, setPreviousPage } from '@/redux/pagination/paginationSlice'

export const Home = () => {
  const dispatch = useAppDispatch()
  const oompas = useAppSelector((state) => state.oompas)
  const { current: page, total } = useAppSelector((state) => state.pagination)

  const [isLoading, setIsLoading] = useState(false)

  const getAllOompas = async () => {
    setIsLoading(true)
    try {
      await getPageOompas(page)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const previousPage = () => dispatch(setPreviousPage())
  const nextPage = () => dispatch(setNextPage())

  useEffect(() => {
    getAllOompas().then((data) => dispatch(getOompas(data.results)))
  }, [dispatch, page])

  return (
    <Layout>
      <div className="flex flex-col">
        <h1 className="text-4xl mb-1 font-normal text-center">Find your Oompa Loompa</h1>
        <h2 className="text-2xl mb-8 font-normal text-center text-grey-dark">
          There are more than 100k
        </h2>
        <Grid oompas={oompas} />
        <div className="flex flex-row justify-between pt-8 mb-4 border-t-2 border-grey-dark">
          <button
            className="bg-grey-dark text-white hover:bg-grey-light hover:text-grey-dark disabled:bg-gray-200  disabled:text-gray-500  font-bold py-2 px-4 rounded uppercase"
            onClick={previousPage}
            disabled={isLoading || page === 1}
          >
            Previous
          </button>
          <span className="text-grey-dark uppercase">
            Page {page} of {total}
          </span>
          <button
            className="bg-grey-dark text-white hover:bg-grey-light hover:text-grey-dark disabled:bg-gray-200  disabled:text-gray-500  font-bold py-2 px-4 rounded uppercase"
            onClick={nextPage}
            disabled={isLoading || page === total}
          >
            Next
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Home
