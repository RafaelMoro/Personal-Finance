import React from 'react'
import { useSelector } from 'react-redux'

import { Container, Typography } from '@mui/material'

import { Accounts } from '@containers/Accounts'
import { Records } from '@containers/Records'
import { Account } from '@components/Account'
import { Record } from '@components/Record'
import { useLocalStorage } from '@hooks/useLocalStorage'

import { CreateAccountButton } from '@components/CreateAccountButton'
import { AccountModal } from '@containers/AccountModal'

const Main = () => {
  const [ accountModal, setAccountModal ] = React.useState({
    type: '',
    modal: false,
    account: null
  })
  const LOCAL_STORAGE = process.env.LOCAL_STORAGE
  useLocalStorage(LOCAL_STORAGE)

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

  const accountClickHandler = (type, account = null) => {
    setAccountModal({
      type: type,
      modal: !accountModal.modal,
      account: account
    })
  }
  return (
    <>
    <Container maxWidth="md" sx={{ bgcolor: '#f5f5f5' }}>
      <Accounts
        accounts={accountsState}
        noAccounts={() => <Typography>There are not accounts created.</Typography>}
        renderAccounts={(account, index) => ( <Account key={index} account={account} launchModal={accountClickHandler} />)}
      >
        <CreateAccountButton launchModal={accountClickHandler} />
      </Accounts>
      <Records
        records={records}
        renderRecords={(record, index) => ( <Record key={index} record={record} /> )}
      />
    </Container>
    { accountModal.modal && <AccountModal accountModal={accountModal} close={accountClickHandler} /> }
    </>
  )
}

export {Main}