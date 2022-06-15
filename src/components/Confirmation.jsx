import React from 'react'
import { Modal, Box, TextField, Button, Typography } from '@mui/material'
import { modalStyles } from '@styles/components/modalStyles'

const Confirmation = ({ component, action, open, close }) => {
  return (
    <Modal open={open} onClose={close}>
      <Box sx={modalStyles} >
        <Typography variant="h5" component="p" > Are you sure you want to delete the {component} ? </Typography>
        <Button variant="outlined" onClick={close} color="secondary" > Cancel </Button>
        <Button variant="contained" color="error" > {action} </Button>
      </Box>
    </Modal>
  )
}

export {Confirmation}