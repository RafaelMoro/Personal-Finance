import React from 'react'
import { useSelector } from 'react-redux'

import { Container, Typography } from '@mui/material'

import { Accounts } from '@containers/Accounts'
import { Records } from '@containers/Records'
import { Account } from '@components/Account'
import { Record } from '@components/Record'
import { useLocalStorage } from '@utils/useLocalStorage'

import { CreateAccountButton } from '@components/CreateAccountButton'
import { AccountModal } from '@components/AccountModal'

const Main = () => {
  const [ accountModal, setAccountModal ] = React.useState({
    type: '',
    modal: false
  })
  const LOCAL_STORAGE = process.env.LOCAL_STORAGE
  const saveItem = useLocalStorage(LOCAL_STORAGE)

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

  const accountClickHandler = (type) => {
    setAccountModal({
      type: type,
      modal: !accountModal.modal
    })
  }
  return (
    <>
    <Container maxWidth="md" sx={{ bgcolor: '#f5f5f5' }}>
      <Accounts>
        {
          (accountsState.length > 0) ? accountsState.map((account, index) => ( <Account key={index} account={account} launchModal={accountClickHandler} /> )) : <Typography>There are not accounts created.</Typography>
        }
        <CreateAccountButton launchModal={accountClickHandler} />
      </Accounts>
      <Records>
        {
          records.map((record, index) => ( <Record key={index} record={record} /> ))
        }
      </Records>
    </Container>
    { accountModal && <AccountModal accountModal={accountModal} close={accountClickHandler} saveItem={saveItem} /> }
    </>
  )
}

export {Main}