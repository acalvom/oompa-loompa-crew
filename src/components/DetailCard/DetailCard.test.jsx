import { screen } from '@testing-library/react'
import { beforeEach, expect, test } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

import { DetailCard } from '@/components/DetailCard'
import { renderWithProviders } from '@/utils/test-utils'
import { describe } from 'node:test'

const oompa = {
  first_name: 'FirstName',
  last_name: 'LastName',
  description: '',
  image: '',
  profession: 'Profession',
  gender: 'F',
}

describe('DetailCard component', () => {
  beforeEach(() => {
    renderWithProviders(
      <MemoryRouter>
        <DetailCard oompa={oompa} />
      </MemoryRouter>
    )
  })

  test('renders DetailCard component', () => {
    expect(screen.getByTestId('oompa-img')).toBeInTheDocument()
    expect(screen.getByTestId('oompa-info')).toBeInTheDocument()
  })

  test('Get Oompa info', () => {
    const oompaInfo = screen.getByTestId('oompa-info')
    expect(oompaInfo).toHaveTextContent('FirstName')
    expect(oompaInfo).toHaveTextContent('LastName')
    expect(oompaInfo).toHaveTextContent('Profession')
  })
})
