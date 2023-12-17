import { screen, fireEvent } from '@testing-library/react'
import { beforeEach, expect, test } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

import { Pagination } from '@/components/Pagination'
import { renderWithProviders } from '@/utils/test-utils'
import { describe } from 'node:test'

describe('Pagination', () => {
  beforeEach(() => {
    renderWithProviders(
      <MemoryRouter>
        <Pagination />
      </MemoryRouter>
    )
  })

  test('renders Pagination component', () => {
    expect(screen.getByTestId('page-label-sm')).toBeInTheDocument()
    expect(screen.getByTestId('page-label')).toBeInTheDocument()
    expect(screen.getByTestId('previous-button')).toBeInTheDocument()
    expect(screen.getByTestId('next-button')).toBeInTheDocument()
  })

  test('Previous button', () => {
    const previousButton = screen.getByTestId('previous-button')
    expect(previousButton).toHaveTextContent('Previous')
    expect(previousButton).toBeDisabled()
    fireEvent.click(previousButton)
    expect(screen.getByTestId('page-label')).toHaveTextContent('Page 1 of 20')
  })

  test('Next button', () => {
    const nextButton = screen.getByTestId('next-button')
    expect(nextButton).toHaveTextContent('Next')
    expect(nextButton).toBeEnabled()
    fireEvent.click(nextButton)
    expect(screen.getByTestId('page-label')).toHaveTextContent('Page 2 of 20')
  })
})
