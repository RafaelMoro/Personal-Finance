import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAccount } from '../redux/slices/accounts.slice'

import { Modal, Box, Button, Typography } from '@mui/material'
import { modalStyles } from '@styles/components/modalStyles'

const Confirmation = ({ component, action, open, close, accountId }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteAccount(accountId))
  }
  return (
    <Modal open={open} onClose={close}>
      <Box sx={modalStyles} >
        <Typography variant="h5" component="p" > Are you sure you want to delete the {component} ? </Typography>
        <Button variant="outlined" onClick={close} color="secondary" > Cancel </Button>
        <Button variant="contained" color="error" onClick={handleDelete} > {action} </Button>
      </Box>
    </Modal>
  )
}

export {Confirmation}