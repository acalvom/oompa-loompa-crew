import { getGenderLabel } from '@/utils/gender-label'
import { parseHtml } from '@/utils/html-parser'

export const DetailCard = ({ oompa }) => {
  return (
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
        <div className="my-5 leading-relaxed">{parseHtml(oompa.description)}</div>
      </div>
    </div>
  )
}

export default DetailCard
