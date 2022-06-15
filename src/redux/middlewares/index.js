import { saveItemLocalStorage } from "@utils/saveItemLocalStorage"

const saveLocalStorage = store => next => actionInfo => {
  if(actionInfo.type === 'accounts/createAccounts') {
    const state = store.getState()
    const accounts = [...state.accountsModule.accounts, actionInfo.payload]
    const newState = {
      ...state,
      accountsModule: {
        accounts
      }
    }
    saveItemLocalStorage(newState)
    const newActionInfo = { ...actionInfo, accounts }
    next(newActionInfo)

  }else if(actionInfo.type === 'accounts/modifyAccount') {
    const state = store.getState()
    const modifiedAccounts = state.accountsModule.accounts.map(account => {
      if(account.id !== actionInfo.payload.id) return account
      return { ...account, ...actionInfo.payload}
    })
    const newState = {
      ...state,
      accountsModule: {
        accounts: [...modifiedAccounts]
      }
    }
    saveItemLocalStorage(newState)
    const newActionInfo = { ...actionInfo, modifiedAccounts }
    next(newActionInfo)
  }else if(actionInfo.type === 'accounts/deleteAccount') {
    console.log(actionInfo.payload)
    const state = store.getState()
    const modifiedAccounts = state.accountsModule.accounts.filter(account => account.id !== actionInfo.payload)
    const newState = {
      ...state,
      accountsModule: {
        accounts: [...modifiedAccounts]
      }
    }
    saveItemLocalStorage(newState)
    const newActionInfo = { ...actionInfo, modifiedAccounts }
    next(newActionInfo)
  } else next(actionInfo)
  
}

export { saveLocalStorage }