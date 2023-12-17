import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { getOompaByID } from '@/services'
import { getGenderLabel } from '@/utils/gender-label'
import { Layout } from '@/layout'
import { Loading } from '@/components/Loading'

export const OompaDetail = () => {
  const { oompaId } = useParams()

  const [isLoading, setIsLoading] = useState(false)
  const [oompa, setOompa] = useState({
    first_name: '',
    last_name: '',
    profession: '',
    image: '',
    description: '',
    gender: '',
  })

  const getOompa = async () => {
    setIsLoading(true)
    try {
      return await getOompaByID(oompaId)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getOompa().then((data) => {
      setOompa(data)
    })
  }, [oompaId])

  return (
    <Layout>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="flex flex-col ">
          <div className="flex flex-col lg:flex-row w-full lg:max-h-400 gap-4">
            <img
              className="sm:max-h-400 lg:w-1/2 object-cover"
              src={oompa.image}
              alt={oompa.first_name}
              data-testid="oompa-img"
            />
            <div className=" lg:w-1/2">
              <div className="font-semibold text-xl mb-1">
                {oompa.first_name} {oompa.last_name}
              </div>
              <p className="text-sm text-grey-dark mb-0.5">{getGenderLabel(oompa.gender)}</p>
              <p className="text-sm text-grey-dark mb-0.5 italic" data-testid="oompa-profession">
                {oompa.profession}
              </p>
              <div className="my-5 leading-relaxed"> {oompa.description}</div>
            </div>
          </div>
          <Link
            to="/"
            className="rounded py-2 px-4 bg-grey-light font-semibold mt-4 w-250 text-center"
            data-testid="back-to-home"
          >
            Back with the Oompas
          </Link>
        </div>
      )}
    </Layout>
  )
}

export default OompaDetail
