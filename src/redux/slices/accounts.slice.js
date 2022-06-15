import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  accounts: []
}

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It uses Immer library which detects changes to a draft state
    // and produces a brand new inmutable state based off those changes
    createAccounts: (state, action) => {
      // In the middleware, the prop accounts was created and added to the action
      state.accounts = action.accounts
    },
    modifyAccount: (state, action) => {
      // From the middleware, modifiedAccounts was created and added to the action
      state.accounts = action.modifiedAccounts
    },
    deleteAccount: (state, action) => {
      //delete account
      state.accounts = action.modifiedAccounts
    },
    fetchAccounts: (state, action) => {
      //Since the payload is already an array, it will be passed directly to accounts
      state.accounts =  action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { createAccounts, modifyAccount, deleteAccount, fetchAccounts } = accountsSlice.actions

export default accountsSlice.reducer
