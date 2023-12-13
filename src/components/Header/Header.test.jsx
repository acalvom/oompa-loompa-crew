import { screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

import { Header } from '@/components/Header'
import { renderWithProviders } from '@/utils/test-utils'

test('renders Header component', () => {
  renderWithProviders(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  )

  expect(screen.getByTestId('oompa-logo')).toBeInTheDocument()
  expect(screen.getByTestId('oompa-nav-text')).toHaveTextContent("Oompa Loompa's Crew")
})
