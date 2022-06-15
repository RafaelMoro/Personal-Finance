import React from 'react'
import { useSelector } from 'react-redux'

import { Container, Typography, Box } from '@mui/material'

import { Accounts } from '@containers/Accounts'
import { Records } from '@containers/Records'
import { Account } from '@components/Account'
import { Record } from '@components/Record'
import { CreateRecord } from '@components/CreateRecord'
import { CreateAccountButton } from '@components/CreateAccountButton'
import { AccountModal } from '@containers/AccountModal'

import { useLocalStorage } from '@hooks/useLocalStorage'
import { BoxStyles } from '@styles/pages/mainStyles'

const Main = () => {
  const [ accountModal, setAccountModal ] = React.useState({
    type: '',
    modal: false,
    account: null
  })
  const LOCAL_STORAGE = process.env.LOCAL_STORAGE
  useLocalStorage(LOCAL_STORAGE)

  const accounts = useSelector(state => state.accountsModule.accounts)

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
      <Box sx={BoxStyles} >
        <Accounts
          accounts={accounts}
          noAccounts={() => <Typography>There are not accounts created.</Typography>}
          renderAccounts={(account, index) => ( <Account key={index} account={account} launchModal={accountClickHandler} />)}
        >
          <CreateAccountButton launchModal={accountClickHandler} />
        </Accounts>
        <Records
          records={records}
          renderRecords={(record, index) => ( <Record key={index} record={record} /> )}
        />
        <CreateRecord />
      </Box>
    </Container>
    { accountModal.modal && <AccountModal accountModal={accountModal} close={accountClickHandler} /> }
    </>
  )
}

export {Main}