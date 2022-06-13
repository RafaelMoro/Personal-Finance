import React from 'react'
import { useDispatch } from 'react-redux'

import { fetchAccounts } from '../redux/slices/accounts.slice'

const useLocalStorage = (localStorageName) => {
  const dispatch = useDispatch()
  
  React.useEffect(() => {
    const localStorageItem = localStorage.getItem(localStorageName)

    if(!localStorageItem) {
      localStorage.setItem(localStorageName, JSON.stringify([]))
    }else {
      const parsedItem = JSON.parse(localStorageItem)
      const parsedItemHasItems = Object.keys(parsedItem).length > 0 ? true : false
      // Make sure that the local Storage has at least 1 item, if so, fetch it
      if(parsedItemHasItems) {
        const accounts = parsedItem.accountsModule.accounts
        dispatch(fetchAccounts(accounts))
      }
    }
  }, [])
  
}

export {useLocalStorage}