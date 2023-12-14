import { Card } from '../Card'

export const Grid = ({ oompas }) => {
  return (
    <div className="flex items-center justify-center">
      {oompas.length === 0 ? (
        <h3 className="text-3xl mb-8 pt-8 font-bold text-center text-grey-dark border-t-2">
          Where are the Oompas? 🔦 <br />
          We can't find them 🌚 🌝
        </h3>
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:w-full"
          data-testid="oompa-grid"
        >
          {oompas.map((oompa) => (
            <Card oompa={oompa} key={oompa.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Grid
