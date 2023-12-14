import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    current: 1,
    total: 20,
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setNextPage: (state) => {
      if (state.current === state.total) return state
      return { ...state, current: state.current + 1 }
    },
    setPreviousPage: (state) => {
      if (state.current === 1) return state
      return { ...state, current: state.current - 1 }
    }
  },
})

export const { setNextPage, setPreviousPage } = paginationSlice.actions

export default paginationSlice.reducer
