import { screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { renderWithProviders } from '@/utils/test-utils'

test('renders Home component', async () => {
  renderWithProviders(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )

  expect(screen.getByText('Find your Oompa Loompa')).toBeInTheDocument()
  expect(screen.getByText('There are more than 100k')).toBeInTheDocument()
  const grid = await screen.findByTestId('oompa-grid')
  expect(grid.children).toHaveLength(25)
})
