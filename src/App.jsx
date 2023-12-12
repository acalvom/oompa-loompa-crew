import { useAppDispatch, useAppSelector } from './hooks/store'
import { decrement, increment } from './redux/counter/counterSlice'

import './App.css'

export const App = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.value)

  return (
    <main className="flex flex-col">
      <div className="bg-grey-light p-4 my-4">
        <h1 className="text-4xl font-bold">Oompa Loompa Crew Home</h1>
      </div>
      <div className="rounded border-2 border-yellow-500">
        <div className="flex flex-row p-2 gap-2 justify-center">
          <button
            className="bg-red-500	rounded-sm p-2"
            aria-label="Decrement value"
            data-testid='decrement'
            onClick={() => dispatch(decrement())}
          >
            - Decrement
          </button>
          <button
            className="bg-lime-500	rounded-sm p-2"
            aria-label="Increment value"
            data-testid='increment'
            onClick={() => dispatch(increment())}
          >
            + Increment
          </button>
        </div>
        <div className="flex justify-center my-2">
          <span data-testid='count' className="text-xl font-bold text-center rounded bg-cyan-500 p-2 w-1/4">{count}</span>
        </div>
      </div>
    </main>
  )
}

export default App
