import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension'
import oompasReducer from './oompas/oompasSlice'

export const store = configureStore(
  {
    reducer: { oompas: oompasReducer },
  },
  composeWithDevTools()
)

export default store
