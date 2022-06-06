import React from 'react'
import Grid from '@mui/material/Grid'

const Accounts = ({ children }) => {
  return (
    <Grid container spacing={2}>
      { children }
    </Grid >
  )
}

export {Accounts}