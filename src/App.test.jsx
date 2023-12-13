import { screen, fireEvent } from '@testing-library/react'
import { expect, test } from 'vitest'

import { App } from './App'
import { renderWithProviders } from './utils/test-utils'

test('renders App component', () => {
  renderWithProviders(<App />)
  
  expect(screen.getByText('Oompa Loompa Crew Home')).toBeInTheDocument()
  expect(screen.getByTestId('count')).toHaveTextContent('0')
  fireEvent.click(screen.getByTestId('increment'))
  expect(screen.getByTestId('count')).toHaveTextContent('1')
  fireEvent.click(screen.getByTestId('decrement'))
  expect(screen.getByTestId('count')).toHaveTextContent('0')
})
