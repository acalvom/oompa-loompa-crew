import { expect, test, describe } from 'vitest'

import paginationSlice, { initialState, setNextPage, setPreviousPage } from './paginationSlice'

describe('tests for paginationSlice', () => {
  test('initialize slice with initialValue', () => {
    const paginationSliceInit = paginationSlice(initialState, { type: 'unknown' })
    expect(paginationSliceInit).toBe(initialState)
  })

  test('increase page', () => {
    const page = paginationSlice(initialState, setNextPage())
    expect(page.current).toBe(2)
  })

  test('decrease page', () => {
    const state = {
      current: 2,
      total: 20,
    }
    const page = paginationSlice(state, setPreviousPage())
    expect(page.current).toBe(state.current - 1)
  })

  test('cannot increase page because it is last page', () => {
    const state = {
      current: 20,
      total: 20,
    }
    const page = paginationSlice(state, setNextPage())
    expect(page.current).toBe(state.total)
  })

  test('cannot decrease page because it is first page', () => {
    const state = {
      current: 1,
      total: 20,
    }
    const page = paginationSlice(state, setPreviousPage())
    expect(page.current).toBe(state.current)
  })
})
