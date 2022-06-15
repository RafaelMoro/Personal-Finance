import React from 'react'
import { useDispatch } from 'react-redux'

import { Modal, Box, TextField, Button, Typography } from '@mui/material'

import { createAccounts, modifyAccount } from '../redux/slices/accounts.slice'
import { SelectInput } from '@components/SelectInput'
import { modalStyles, boxButtonsStyles } from '@styles/components/modalStyles'

const TYPE_ACCOUNT_OPTIONS = ['Debit', 'Credit', 'Food Voucher', 'Savings']
const COLOR_OPTIONS = ['Red', 'White', 'Blue', 'Black', 'Grey']

const AccountModal = ({ accountModal, close }) => {
  const dispatch = useDispatch()
  const { account } = accountModal

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    if(accountModal.type === 'Create') {
      const accountData = {
        //create id until I connect it to a backend
        id: Math.floor(Math.random() * 1000),
        name: formData.get('accountName'),
        type: formData.get('type'),
        initialAmount: Number(formData.get('initialAmount')),
        color: formData.get('color')
      }
      dispatch(createAccounts(accountData))
    }else {
      const accountData = {
        id: account.id,
        name: formData.get('accountName'),
        type: formData.get('type'),
        initialAmount: Number(formData.get('initialAmount')),
        color: formData.get('color')
      }
      dispatch(modifyAccount(accountData))
    }
    close('')
  }

  return (
    <Modal open={accountModal.modal} onClose={() => close('')}>
      <Box sx={modalStyles} component="form" onSubmit={handleSubmit}>
        <Typography variant="h5" component="p" >{accountModal.type} Account </Typography>

        <TextField name="accountName" variant="outlined" label="Account name" defaultValue={account ? account.name : ""}  />
        <SelectInput name="type" id="typeAccount" labelName="Type of Account" value={account?.type} options={TYPE_ACCOUNT_OPTIONS} />
        <TextField name="initialAmount" variant="outlined" label="Initial Amount" defaultValue={account ? account.initialAmount : ""} />
        <SelectInput name="color" id="color" labelName="Color" value={account?.color} options={COLOR_OPTIONS} />
        <Box sx={boxButtonsStyles} className="buttons">
          <Button variant="outlined" onClick={() => close('')} color="error" > Cancel </Button>
          <Button variant="contained" type='submit'> {accountModal.type} </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export {AccountModal}