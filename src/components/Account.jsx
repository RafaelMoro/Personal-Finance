import React from 'react'
import { Paper, Typography, Grid, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import EditIcon from '@mui/icons-material/EditOutlined';

import { formatNumberToCurrency } from '../utils/formatNumberToCurrency'
import '@styles/components/accounts.scss'

const Account = ({ account }) => {
  const [initialAmountFormated, setInitialAmountFormated] = React.useState(null)
  
  React.useEffect(() => {
    setInitialAmountFormated(formatNumberToCurrency(account.initialAmount))
  }, [account.initialAmount])
  
  return (
    <>
      <Grid item xs={4}>
        <Paper elevation={2} sx={{ p: 2 }}>
          <div className='card__title-buttons'>
            <Typography variant="h5" component="h4" >{account.name}</Typography>
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon sx={{ color: 'red' }} />
            </IconButton>
          </div>
            
            <div className='card__description'>
              <Typography color="text.secondary" >{account.type}</Typography>
              <Typography>$ {initialAmountFormated}</Typography>
            </div>
        </Paper>
      </Grid>
    </>
  )
}

export {Account}
