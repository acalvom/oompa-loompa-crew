import { useParams } from 'react-router-dom'
export const OompaDetail = () => {
  let { oompaId } = useParams()

  return <div>Hi!. This is oompa {oompaId}</div>
}

export default OompaDetail
