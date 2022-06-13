import { configureStore } from '@reduxjs/toolkit'
import accountsReducer from './slices/accounts.slice'
import { saveLocalStorage } from './middlewares'

export const store = configureStore({
  reducer: {
    accountsModule: accountsReducer
  },
  middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(saveLocalStorage))
})
