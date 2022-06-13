import React from 'react'
import Grid from '@mui/material/Grid'

const Records = ({ records, renderRecords }) => {
  return (
    <Grid container spacing={4}>
      { records.length > 0 && records.map(renderRecords) }
    </Grid >
  )
}

export {Records}