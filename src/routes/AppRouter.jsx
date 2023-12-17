import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'
import { OompaDetail } from '@/pages/OompaDetail'

const routes = [
  {
    key: 'home',
    path: '/',
    element: <Home />,
  },
  {
    key: 'not-found',
    path: '/*',
    element: <NotFound />,
  },
  {
    key: 'oompa-detail',
    path: 'oompa/:oompaId',
    element: <OompaDetail />,
  },
]

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ key, path, element }) => (
          <Route key={key} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
