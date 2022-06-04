import { configureStore } from '@reduxjs/toolkit'
import accountsReducer from './slices/accounts.slice'

export const store = configureStore({
  reducer: {
    accounts: accountsReducer
  }
})
