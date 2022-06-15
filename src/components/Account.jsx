import React, { useState, useEffect } from 'react'
import { Paper, Typography, Grid, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import EditIcon from '@mui/icons-material/EditOutlined'

import { formatNumberToCurrency } from '@utils/formatNumberToCurrency'
import { Confirmation } from '@components/Confirmation'
import '@styles/components/accounts.scss'

const Account = ({ account, launchModal }) => {
  const [initialAmountFormated, setInitialAmountFormated] = useState(null)
  const [toggleModal, setToggleModal] = useState(false)
  
  const handleToggleModal = () => {
    setToggleModal(!toggleModal)
  }

  useEffect(() => {
    setInitialAmountFormated(formatNumberToCurrency(account.initialAmount))
  }, [account.initialAmount])
  
  return (
    <>
      <Grid item xs={4}>
        <Paper elevation={2} sx={{ p: 2 }}>
          <div className='card__title-buttons'>
            <Typography variant="h5" component="h4" >{account.name}</Typography>
            <IconButton aria-label="edit" onClick={() => launchModal('Edit', account)}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={handleToggleModal}>
              <DeleteIcon sx={{ color: 'red' }} />
            </IconButton>
          </div>
          <div className='card__description'>
            <Typography color="text.secondary" >{account.type}</Typography>
            <Typography>$ {initialAmountFormated}</Typography>
          </div>
        </Paper>
      </Grid>
      { toggleModal && <Confirmation open={toggleModal} close={handleToggleModal} accountId={account.id} component="account" action="Delete" /> }
    </>
  )
}

export {Account}
