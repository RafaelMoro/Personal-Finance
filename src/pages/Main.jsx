import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createAccounts } from '../redux/slices/accounts.slice'
import { Accounts } from '@containers/Accounts'
import { Records } from '@containers/Records'
import { Account } from '@components/Account'
import { Record } from '@components/Record'

const Main = () => {
  const dispatch = useDispatch()
  const accountsState = useSelector(state => state.accounts.accounts)
  console.log(accountsState)
  const accounts = [
    {
      name: "BBVA Bancomer",
      type: "Debit",
      initialAmount: 2000
    },
    {
      name: "Sodexo",
      type: "Food Voucher",
      intialAmount: 2500
    }
  ]
  const records = [
    {
      shortName: "Oxxo six cervezas",
      description: "Un six de chelas",
      amount: 150
    },
    {
      shortName: "Cigarros",
      description: "cigarros pa la peda",
      amount: 65
    }
  ]

  const clickHandler = () => {
    dispatch(createAccounts({
      name: 'New Account',
      initialValue: 2500
    }))
  }
  return (
    <main>
      <Accounts>
        {
          accounts.map((account, index) => ( <Account key={index} account={account} /> ))
        }
      </Accounts>
      <Records>
        {
          records.map((record, index) => ( <Record key={index} record={record} /> ))
        }
      </Records>
      <button onClick={ clickHandler }>Añadir cuenta</button>
      
    </main>
  )
}

export {Main}