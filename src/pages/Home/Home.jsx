import { useEffect, useState } from 'react'
import { useAppSelector } from '@/hooks/store'
import { useOompas } from '@/hooks/useOompas'

import { Layout } from '@/layout'
import { Grid } from '@/components/Grid'
import { Pagination } from '@/components/Pagination'
import { Loading } from '@/components/Loading'
import { Search } from '@/components/Search'

export const Home = () => {
  const page = useAppSelector((state) => state.pagination.current)

  const { oompas, isLoading } = useOompas({ page })
  const [search, setSearch] = useState('')
  const [filteredOompas, setFilteredOompas] = useState([])

  useEffect(() => setFilteredOompas(oompas), [oompas])

  useEffect(() => {
    const filterOompas = () => {
      const filteredOopmas = oompas.filter(
        (oompa) =>
          oompa.first_name.toLowerCase().includes(search.toLowerCase()) ||
          oompa.last_name.toLowerCase().includes(search.toLowerCase()) ||
          oompa.profession.toLowerCase().includes(search.toLowerCase())
      )
      setFilteredOompas(filteredOopmas)
    }

    filterOompas()
  }, [search])

  return (
    <Layout>
      <div className="flex flex-col">
        {!isLoading && <Search setSearch={setSearch} />}
        <h1 className="text-4xl mb-1 font-normal text-center">Find your Oompa Loompa</h1>
        <h2 className="text-2xl mb-8 font-normal text-center text-grey-dark">
          There are more than 100k
        </h2>
        {isLoading && <Loading />}
        {!isLoading && <Grid oompas={filteredOompas} />}
        {!isLoading && oompas.length > 0 && <Pagination />}
      </div>
    </Layout>
  )
}

export default Home
