import { waitFor } from '@testing-library/react'
import { expect } from 'vitest'
import { initialOompa, useOompas } from './useOompas'
import { renderWithProviders } from '@/utils/test-utils'

describe('useOompas', () => {
  test('should return the initial hook satate', () => {
    const { result } = renderWithProviders(useOompas, 'hook', {
      initialProps: {},
    })

    expect(result.current.oompa).toStrictEqual(initialOompa)
    expect(result.current.oompas).toStrictEqual([])
    expect(result.current.isLoading).toBe(false)
  })

  test('should return first api call Oompas', async () => {
    const { result } = renderWithProviders(useOompas, 'hook', {
      initialProps: { page: 1 },
    })

    await waitFor(() => expect(result.current.oompas).toHaveLength(25), { timeout: 1500 })
    expect(result.current.isLoading).toBe(false)
  })

  test('should return third oompa in page 4', async () => {
    const { result } = renderWithProviders(useOompas, 'hook', {
      initialProps: { oompaId: 78 },
    })

    await waitFor(() => expect(result.current.isLoading).toBe(false), { timeout: 1500 })
    const oompa = result.current.oompa
    expect(oompa.first_name).toBe('Kaiser')
    expect(oompa.last_name).toBe('Gass')
  })
})
