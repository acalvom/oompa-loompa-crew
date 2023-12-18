import { useParams } from 'react-router-dom'
import { useOompas } from '@/hooks/useOompas'
import { Layout } from '@/layout'
import { Loading } from '@/components/Loading'
import { DetailCard } from '@/components/DetailCard'
import { BackButton } from '@/components/BackButton'

export const OompaDetail = () => {
  const { oompaId } = useParams()
  const { oompa, isLoading } = useOompas({ oompaId })

  return (
    <Layout>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="flex flex-col" data-testid="oompa-details">
          <DetailCard oompa={oompa} />
          <BackButton />
        </div>
      )}
    </Layout>
  )
}

export default OompaDetail
