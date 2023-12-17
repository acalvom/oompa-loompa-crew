import { screen, fireEvent } from '@testing-library/react'
import { beforeEach, expect, test, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

import { Search } from '@/components/Search'
import { renderWithProviders } from '@/utils/test-utils'
import { describe } from 'node:test'

describe('Search component', () => {
  beforeEach(() => {
    renderWithProviders(
      <MemoryRouter>
        <Search setSearch={vi.fn()} />
      </MemoryRouter>
    )
  })

  test('renders Search component', () => {
    expect(screen.getByTestId('search-input')).toBeInTheDocument()
    expect(screen.getByTestId('search-icon')).toBeInTheDocument()
  })

  test('Type in input', () => {
    const searchInput = screen.getByTestId('search-input')
    fireEvent.change(searchInput, { target: { value: 'Input text' } })
    expect(searchInput.value).toBe('Input text')
  })
})
