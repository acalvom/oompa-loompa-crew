import { screen, fireEvent } from '@testing-library/react'
import { expect, test } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

import { NotFound } from '@/pages/NotFound'
import { renderWithProviders } from '@/utils/test-utils'

test('renders NotFound component', () => {
  renderWithProviders(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  )

  expect(screen.getByText('Oops!')).toBeInTheDocument()
  expect(screen.getByText('This page does not exist')).toBeInTheDocument()
  expect(screen.getByTestId('back-to-home')).toHaveTextContent('Back with the Oompas')
  fireEvent.click(screen.getByTestId('back-to-home'))
})
