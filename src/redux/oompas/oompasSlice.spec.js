import { expect, test, describe } from 'vitest'

import oompasSlice, { initialState, initOompas } from './oompasSlice'
import { mockedOompas } from '@/mocks/oompas'

describe('tests for oompasSlice', () => {
  test('initialize slice with initialValue', () => {
    const oompasSliceInit = oompasSlice(initialState, { type: 'unknown' })
    expect(oompasSliceInit).toBe(initialState)
  })

  test('get initial oompas', () => {
    const oompas = oompasSlice(mockedOompas, initOompas())
    expect(oompas.length).to.be.greaterThan(0)
    expect(oompas.length).toBe(25)
    expect(oompas).toBe(mockedOompas)
  })
})
