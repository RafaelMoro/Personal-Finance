import React from 'react'
import Grid from '@mui/material/Grid'

const Accounts = ({ accounts, renderAccounts, noAccounts, children }) => {
  return (
    <Grid container spacing={2} sx={{my: 5}}>
      { accounts.length > 0 ? accounts.map(renderAccounts) : noAccounts() }
      { children }
    </Grid >
  )
}

export {Accounts}