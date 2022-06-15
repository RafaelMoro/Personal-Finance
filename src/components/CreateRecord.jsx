import React from 'react'
import { Box, Fab, Grid } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const CreateRecord = () => {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 }, justifySelf: 'flex-end' }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  )
}

export {CreateRecord}