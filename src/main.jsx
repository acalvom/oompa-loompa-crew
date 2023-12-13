import ReactDOM from 'react-dom/client'
import App from './App'
import { ErrorPage } from './pages/ErrorPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './redux'
import { Provider } from 'react-redux'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
