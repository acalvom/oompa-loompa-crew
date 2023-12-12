import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension'
import counterReducer from './counter/counterSlice'

export const store = configureStore(
  {
    reducer: { counter: counterReducer },
  },
  composeWithDevTools()
)

export default store
