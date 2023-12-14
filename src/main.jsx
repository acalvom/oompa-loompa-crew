import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '@/redux'
import { AppRouter } from '@/routes/AppRouter'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
