import React, { useState } from 'react'
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

const AccountModal = ({ accountModal, close, saveItem }) => {
  const dispatch = useDispatch()
  const accounts = useSelector(state => state.accountsModule.accounts)

  const [type, setType] = useState('')
  const [color, setColor] = useState('')
  console.log('re-rendering')

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const accountData = {
      name: formData.get('accountName'),
      type: type,
      initialAmount: Number(formData.get('initialAmount')),
      color: color
    }
    const state = {
      accountsModule: {
        accounts: [...accounts, accountData]
      }
    }
    dispatch(createAccounts(accountData))
    // Temporary until I add a middleware to update localStorage after updating reducer and state
    //saveItem(state)
    close('')
  }

  return (
    <Modal open={accountModal.modal} onClose={() => close('')}>
      <Box sx={boxStyle} component="form" onSubmit={handleSubmit}>
        <Typography variant="h5" component="p" >{accountModal.type} Account </Typography>
        <TextField name="accountName" variant="outlined" label="Account name" />
        <FormControl>
          <InputLabel id="typeAccount">Type of Account</InputLabel>
          <Select id="typeAccount" value={type} label="Type of account" name="accountType" onChange={(event) => setType(event.target.value)} >
            <MenuItem value="Debit">Debit</MenuItem>
            <MenuItem value="Credit">Credit</MenuItem>
            <MenuItem value="Food Voucher">Food Voucher</MenuItem>
            <MenuItem value="Savings">Savings</MenuItem>
          </Select>
        </FormControl>
        <TextField name="initialAmount" variant="outlined" label="Initial Amount" />
        <FormControl>
          <InputLabel id="color">Color</InputLabel>
          <Select labelId="label-color" id="color" value={color} label="Color" name="color" onChange={(event) => setColor(event.target.value)} >
            <MenuItem value="Red">Red</MenuItem>
            <MenuItem value="Blue">Blue</MenuItem>
            <MenuItem value="Black">Black</MenuItem>
            <MenuItem value="White">White</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" type='submit'> {accountModal.type} </Button>
      </Box>
    </Modal>
  )
}

export {AccountModal}