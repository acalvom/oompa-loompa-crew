import { screen, fireEvent } from '@testing-library/react'
import { expect, test } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { renderWithProviders } from '@/utils/test-utils'

test('renders Home component', () => {
  renderWithProviders(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )

  expect(screen.getByText("Oompa Loompa's Crew")).toBeInTheDocument()
  expect(screen.getByTestId('count')).toHaveTextContent('0')
  fireEvent.click(screen.getByTestId('increment'))
  expect(screen.getByTestId('count')).toHaveTextContent('1')
  fireEvent.click(screen.getByTestId('decrement'))
  expect(screen.getByTestId('count')).toHaveTextContent('0')
})
