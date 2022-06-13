import { saveItemLocalStorage } from "@utils/saveItemLocalStorage"

const saveLocalStorage = store => next => actionInfo => {
  if(actionInfo.type === 'accounts/createAccounts') {
    const state = store.getState()
    const newState = {
      ...state,
      accountsModule: {
        accounts: [...state.accountsModule.accounts, actionInfo.payload]
      }
    }
    saveItemLocalStorage(newState)
  }
  next(actionInfo)
}

export { saveLocalStorage }