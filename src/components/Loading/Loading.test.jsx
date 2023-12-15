import { screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

import { Loading } from '@/components/Loading'
import { renderWithProviders } from '@/utils/test-utils'

test('renders Loading component', () => {
  renderWithProviders(
    <MemoryRouter>
      <Loading />
    </MemoryRouter>
  )

  expect(screen.getByTestId('loading-text')).toBeInTheDocument()
  expect(screen.getByTestId('loading-text')).toHaveTextContent('Loading...')
  expect(screen.getByTestId('loading-text')).toHaveTextContent('Be patience')
})
