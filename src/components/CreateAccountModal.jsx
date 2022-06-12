import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Modal, Box, TextField, Button, Typography, Select, MenuItem, InputLabel, FormControl  } from '@mui/material'

import { createAccounts } from '../redux/slices/accounts.slice'

const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate( -50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'grid',
  gap: 4
}

const CreateAccountModal = ({ open, close, saveItem }) => {
  const accounts = useSelector(state => state.accountsModule.accounts)
  const [newAccount, setNewAccount] = React.useState({
    name: '',
    type: '',
    initialAmount: 0,
    color: ''
  })
  const dispatch = useDispatch()

  const handleCreateAccount = () => {
    const state = {
      accountsModule: {
        accounts: [...accounts, newAccount]
      }
    }
    dispatch(createAccounts(newAccount))
    // Temporary until I add a middleware to update localStorage after updating reducer and state
    saveItem(state)
    close()
  }

  return (
    <Modal open={open} onClose={close}>
      <Box sx={boxStyle}>
        <Typography variant="h5" component="p" >Create Account </Typography>
        <TextField onChange={(event) => setNewAccount({...newAccount, name: event.target.value})} variant="outlined" label="Account name" />
        <FormControl>
          <InputLabel id="typeAccount">Type of Account</InputLabel>
          <Select id="typeAccount" value={newAccount.type} label="Type of account" onChange={(event) => setNewAccount({...newAccount, type: event.target.value})} >
            <MenuItem value="Debit">Debit</MenuItem>
            <MenuItem value="Credit">Credit</MenuItem>
            <MenuItem value="Food_Voucher">Food Voucher</MenuItem>
            <MenuItem value="Savings">Savings</MenuItem>
          </Select>
        </FormControl>
        <TextField onChange={(event) => setNewAccount({...newAccount, initialAmount: Number(event.target.value)})} variant="outlined" label="Initial Amount" />
        <FormControl>
          <InputLabel id="color">Color</InputLabel>
          <Select labelId="label-color" id="color" value={newAccount.color} label="Color" onChange={(event) => setNewAccount({...newAccount, color: event.target.value})} >
            <MenuItem value="Red">Red</MenuItem>
            <MenuItem value="Blue">Blue</MenuItem>
            <MenuItem value="Black">Black</MenuItem>
            <MenuItem value="White">White</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" onClick={handleCreateAccount}> Create </Button>
      </Box>
    </Modal>
  )
}

export {CreateAccountModal}