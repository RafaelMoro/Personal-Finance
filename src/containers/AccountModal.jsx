import React from 'react'
import { useDispatch } from 'react-redux'

import { Modal, Box, TextField, Button, Typography } from '@mui/material'

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

const AccountModal = ({ accountModal, close }) => {
  const dispatch = useDispatch()
  const { account } = accountModal

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const accountData = {
      name: formData.get('accountName'),
      type: formData.get('type'),
      initialAmount: Number(formData.get('initialAmount')),
      color: formData.get('color')
    }
    accountModal.type === 'Create' ? dispatch(createAccounts(accountData)) : console.log('edita')
    close('')
  }

  return (
    <Modal open={accountModal.modal} onClose={() => close('')}>
      <Box sx={boxStyle} component="form" onSubmit={handleSubmit}>
        <Typography variant="h5" component="p" >{accountModal.type} Account </Typography>

        <TextField name="accountName" variant="outlined" label="Account name" defaultValue={account ? account.name : ""}  />
        <SelectInput name="type" id="typeAccount" labelName="Type of Account" value={account?.type} options={TYPE_ACCOUNT_OPTIONS} />
        <TextField name="initialAmount" variant="outlined" label="Initial Amount" defaultValue={account ? account.initialAmount : ""} />
        <SelectInput name="color" id="color" labelName="Color" value={account?.color} options={COLOR_OPTIONS} />
        <Button variant="contained" type='submit'> {accountModal.type} </Button>
      </Box>
    </Modal>
  )
}

export {AccountModal}