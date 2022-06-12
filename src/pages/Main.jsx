import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createAccounts } from '../redux/slices/accounts.slice'

import { Container } from '@mui/material'

import { Accounts } from '@containers/Accounts'
import { Records } from '@containers/Records'
import { Account } from '@components/Account'
import { Record } from '@components/Record'
import { useLocalStorage } from '@utils/useLocalStorage'

import { CreateAccountButton } from '@components/CreateAccountButton'
import { CreateAccountModal } from '@components/CreateAccountModal'

const Main = () => {
  const [ createAccountModal, setCreateAccountModal ] = React.useState(false)
  const LOCAL_STORAGE = process.env.LOCAL_STORAGE
  const saveItem = useLocalStorage(LOCAL_STORAGE)

  const dispatch = useDispatch()
  const accountsState = useSelector(state => state.accountsModule.accounts)

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
  const createAccountClickHandler = () => {
    setCreateAccountModal(!createAccountModal)
  }
  return (
    <>
    <Container maxWidth="md" sc={{ bgcolor: '#f5f5f5' }}>
      <Accounts>
        {
          (accountsState.length > 0) ? accountsState.map((account, index) => ( <Account key={index} account={account} /> )) : <p>No hay cuentas</p>
        }
        <CreateAccountButton launchModal={createAccountClickHandler} />
      </Accounts>
      <Records>
        {
          records.map((record, index) => ( <Record key={index} record={record} /> ))
        }
      </Records>
      <button onClick={ clickHandler }>Añadir cuenta</button>
    </Container>
    { createAccountModal && <CreateAccountModal open={createAccountModal} close={createAccountClickHandler} saveItem={saveItem} /> }
    </>
  )
}

export {Main}