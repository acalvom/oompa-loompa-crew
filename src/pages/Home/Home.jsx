import { useEffect } from 'react'
import { Layout } from '@/layout'
import { useAppDispatch, useAppSelector } from '@/hooks/store'
import { initOompas } from '@/redux/oompas/oompasSlice'
import { getOompas } from '@/services'
import { getGenderLabel } from '@/utils/gender-label'

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

        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:w-full">
            {oompas.map((oompa) => (
              <div className="p-1" key={oompa.id}>
                <img
                  src={oompa.image}
                  alt={oompa.first_name}
                  className="w-full max-h-64 object-cover"
                />
                <div className="py-4">
                  <div className="font-semibold text-xl mb-1">
                    {oompa.first_name} {oompa.last_name}
                  </div>
                  <p className="text-sm text-grey-dark mb-0.5">{getGenderLabel(oompa.gender)}</p>
                  <p className="text-sm text-grey-dark mb-0.5 italic">{oompa.profession}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
