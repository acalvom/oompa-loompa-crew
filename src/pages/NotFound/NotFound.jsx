import { Layout } from '@/layout'
import willyWonka from '@/assets/willy-wonka.png'
import { BackButton } from '@/components/BackButton'

export const NotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="h-2/3 md:max-h-full flex justify-center">
          <img
            className="h-full"
            src={willyWonka}
            alt="Willy Wonka"
            data-testid="willy-wonka-img"
          />
        </div>
        <div className="flex flex-col items-center md:items-end md:justify-around">
          <h1 className="text-4xl md:text-8xl font-bold my-4">Oops!</h1>
          <p className="text-2xl md:text-4xl font-semibold my-4 md:text-right">
            This page does not exist
          </p>
          <BackButton />
        </div>
      </div>
    </Layout>
  )
}

export default NotFound
