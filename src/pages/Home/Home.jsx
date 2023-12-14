import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/store'
import { initOompas } from '@/redux/oompas/oompasSlice'
import { getOompas } from '@/services'
import { Layout } from '@/layout'
import { Grid } from '@/components/Grid'

export const Home = () => {
  const dispatch = useAppDispatch()
  const oompas = useAppSelector((state) => state.oompas)

  const getAllOompas = async (page) => await getOompas(page)

  useEffect(() => {
    getAllOompas(1).then((data) => dispatch(initOompas(data.results)))
  }, [dispatch])

  return (
    <Layout>
      <div className="flex flex-col">
        <h1 className="text-4xl mb-1 font-normal text-center">Find your Oompa Loompa</h1>
        <h2 className="text-2xl mb-8 font-normal text-center text-grey-dark">
          There are more than 100k
        </h2>
        <Grid oompas={oompas} />
      </div>
    </Layout>
  )
}

export default Home
