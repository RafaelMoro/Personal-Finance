import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Modal, Box, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

import { createAccounts } from '../redux/slices/accounts.slice'
import { SelectInput } from '@components/SelectInput'

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

const TYPE_ACCOUNT_OPTIONS = ['Debit', 'Credit', 'Food Voucher', 'Savings']
const COLOR_OPTIONS = ['Red', 'White', 'Blue', 'Black', 'Grey']

const AccountModal = ({ accountModal, close, saveItem }) => {
  const dispatch = useDispatch()
  const accounts = useSelector(state => state.accountsModule.accounts)
  console.log('re-rendering')

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const accountData = {
      name: formData.get('accountName'),
      type: formData.get('type'),
      initialAmount: Number(formData.get('initialAmount')),
      color: formData.get('color')
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
        <SelectInput name="type" id="typeAccount" labelName="Type of Account" options={TYPE_ACCOUNT_OPTIONS} />
        <TextField name="initialAmount" variant="outlined" label="Initial Amount" />
        <SelectInput name="color" id="color" labelName="Color" options={COLOR_OPTIONS} />
        <Button variant="contained" type='submit'> {accountModal.type} </Button>
      </Box>
    </Modal>
  )
}

export {AccountModal}