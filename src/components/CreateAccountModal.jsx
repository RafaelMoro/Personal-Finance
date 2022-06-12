import React from 'react'
import { Modal, Box, TextField, Button, Typography, Select, MenuItem } from '@mui/material'

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

const CreateAccountModal = ({ open, close }) => {
  return (
    <Modal open={open} onClose={close}>
      <Box sx={boxStyle}>
        <Typography variant="h5" component="p" >Create Account </Typography>
        <TextField variant="outlined" label="Account name" />
        <Select label="Type of account">
          <MenuItem value="Debit">Debit</MenuItem>
          <MenuItem value="Credit">Credit</MenuItem>
          <MenuItem value="Food_Voucher">Food Voucher</MenuItem>
          <MenuItem value="Savings">Savings</MenuItem>
        </Select>
        <TextField variant="outlined" label="Initial Amount" />
        <Select label="Color">
          <MenuItem value="Red">Red</MenuItem>
          <MenuItem value="Blue">Blue</MenuItem>
          <MenuItem value="Black">Black</MenuItem>
          <MenuItem value="White">White</MenuItem>
        </Select>
        <Button> Create </Button>
      </Box>
    </Modal>
  )
}

export {CreateAccountModal}