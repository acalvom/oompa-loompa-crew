import { Header } from '@/components/Header'
import { Main } from '@/components/Main'

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
    </div>
  )
}

export default Layout
