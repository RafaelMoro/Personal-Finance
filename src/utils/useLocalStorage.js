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
      dispatch(fetchAccounts(parsedItem))
    }
  }, [])
}

export {useLocalStorage}