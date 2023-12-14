import { createSlice } from '@reduxjs/toolkit'

export const initialState = []

export const oompasSlice = createSlice({
  name: 'oompas',
  initialState,
  reducers: {
    initOompas: (_, action) => action.payload,
  },
})

export const { initOompas } = oompasSlice.actions

export default oompasSlice.reducer
