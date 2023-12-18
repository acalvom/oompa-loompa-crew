import { render, renderHook } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

export const renderWithProviders = (element, type = 'ui', { ...renderOptions } = {}) => {
  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>

  if (type === 'ui') {
    return { store, ...render(element, { wrapper: Wrapper, ...renderOptions }) }
  } else if (type === 'hook') {
    return { store, ...renderHook(element, { wrapper: Wrapper, ...renderOptions }) }
  }
}
