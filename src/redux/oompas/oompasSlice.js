import { createSlice } from '@reduxjs/toolkit'

export const initialState = []

export const oompasSlice = createSlice({
  name: 'oompas',
  initialState,
  reducers: {
    getOompas: (_, action) => action.payload,
  },
})

export const { getOompas } = oompasSlice.actions

export default oompasSlice.reducer
