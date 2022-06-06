import React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const Record = ({ record }) => {
  return (
    <Grid item xs={12}>
      <Paper elevation={2} sx={{ p: 2 }}>
        <Typography variant="subtitle1">{record.shortName}</Typography>
        <Typography color="text.secondary">{record.description}</Typography>
        <Typography>{record.amount}</Typography>
      </Paper>
    </Grid>
  )
}

export {Record}