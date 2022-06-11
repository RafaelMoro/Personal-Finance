import React from 'react'
import { Grid, Typography, Divider } from '@mui/material'

const Record = ({ record }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1">{record.shortName}</Typography>
      <Typography color="text.secondary">{record.description}</Typography>
      <Typography sx={{ mb: 2 }}>{record.amount}</Typography>
      <Divider />
    </Grid>
  )
}

export {Record}