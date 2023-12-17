import { getGenderLabel } from '@/utils/gender-label'

export const Card = (props) => {
  const { oompa } = props

  return (
    <div className="p-1" key={oompa.id}>
      <img src={oompa.image} alt={oompa.first_name} className="w-full max-h-64 object-cover" />
      <div className="py-4">
        <div className="font-semibold text-xl mb-1">
          {oompa.first_name} {oompa.last_name}
        </div>
        <p className="text-sm text-grey-dark mb-0.5">{getGenderLabel(oompa.gender)}</p>
        <p className="text-sm text-grey-dark mb-0.5 italic" data-testid="oompa-profession">
          {oompa.profession}
        </p>
      </div>
    </div>
  )
}

export default Card
