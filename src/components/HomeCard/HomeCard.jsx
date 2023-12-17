import { getGenderLabel } from '@/utils/gender-label'
import { Link } from 'react-router-dom'

export const HomeCard = (props) => {
  const { oompa } = props
  const { id, image, first_name, last_name, gender, profession } = oompa

  return (
    <div className="p-1" key={id}>
      <Link to={`/oompa/${id}`}>
        <img src={image} alt={first_name} className="w-full max-h-64 object-cover" />
        <div className="py-4">
          <div className="font-semibold text-xl mb-1">
            {first_name} {last_name}
          </div>
          <p className="text-sm text-grey-dark mb-0.5">{getGenderLabel(gender)}</p>
          <p className="text-sm text-grey-dark mb-0.5 italic" data-testid="oompa-profession">
            {profession}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default HomeCard
