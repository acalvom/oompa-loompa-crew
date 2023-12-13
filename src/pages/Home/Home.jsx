import { Layout } from '@/layout'
import { useAppDispatch, useAppSelector } from '@/hooks/store'
import { decrement, increment } from '@/redux/counter/counterSlice'

export const Home = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.value)

  return (
    <Layout>
      <div className="rounded border-2 border-yellow-500">
        <div className="flex flex-row p-2 gap-2 justify-center">
          <button
            className="bg-red-500	rounded-sm p-2"
            aria-label="Decrement value"
            data-testid="decrement"
            onClick={() => dispatch(decrement())}
          >
            - Decrement
          </button>
          <button
            className="bg-lime-500	rounded-sm p-2"
            aria-label="Increment value"
            data-testid="increment"
            onClick={() => dispatch(increment())}
          >
            + Increment
          </button>
        </div>
        <div className="flex justify-center my-2">
          <span
            data-testid="count"
            className="text-xl font-bold text-center rounded bg-cyan-500 p-2 w-1/4"
          >
            {count}
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default Home
