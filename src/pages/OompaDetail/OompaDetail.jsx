import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getOompaByID } from '@/services'
import { Layout } from '@/layout'
import { Loading } from '@/components/Loading'
import { DetailCard } from '@/components/DetailCard'
import { BackButton } from '@/components/BackButton'

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
    getOompa().then((data) => setOompa(data))
  }, [oompaId])

  return (
    <Layout>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="flex flex-col" data-testid='oompa-details'>
          <DetailCard oompa={oompa} />
          <BackButton />
        </div>
      )}
    </Layout>
  )
}

export default OompaDetail
