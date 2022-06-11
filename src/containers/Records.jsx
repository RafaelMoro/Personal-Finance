import React from 'react'
import Grid from '@mui/material/Grid'

const Records = ({ children }) => {
  return (
    <Grid container spacing={4}>
      { children }
    </Grid >
  )
}

export {Records}