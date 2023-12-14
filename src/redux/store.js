import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension'
import oompasReducer from './oompas/oompasSlice'
import paginationReducer from './pagination/paginationSlice'

export const store = configureStore(
  {
    reducer: { oompas: oompasReducer, pagination: paginationReducer },
  },
  composeWithDevTools()
)

export default store
