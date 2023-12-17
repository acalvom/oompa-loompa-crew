import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/store'
import { getOompas } from '@/redux/oompas/oompasSlice'
import { getPageOompas } from '@/services'
import { Layout } from '@/layout'
import { Grid } from '@/components/Grid'
import { Pagination } from '@/components/Pagination'
import { Loading } from '@/components/Loading'

export const Home = () => {
  const dispatch = useAppDispatch()
  const oompas = useAppSelector((state) => state.oompas)
  const page = useAppSelector((state) => state.pagination.current)

  const [isLoading, setIsLoading] = useState(false)

  const getAllOompas = async () => {
    setIsLoading(true)
    try {
      return await getPageOompas(page)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

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
        {isLoading && <Loading />}
        {!isLoading && <Grid oompas={oompas} />}
        {!isLoading && oompas.length > 0 && <Pagination />}
      </div>
    </Layout>
  )
}

export default Home
