import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import { formatNumberToCurrency } from '../utils/formatNumberToCurrency'
import '@styles/components/accounts.scss'
import { SignalCellularNullOutlined } from '@mui/icons-material'

const Account = ({ account }) => {
  const [initialAmountFormated, setInitialAmountFormated] = React.useState(null)
  
  React.useEffect(() => {
    setInitialAmountFormated(formatNumberToCurrency(account.initialAmount))
  }, [account.initialAmount])
  
  return (
    <>
      <Grid item xs={4}>
        <Paper elevation={3} sx={{ p: 2, mb: 10, mt: 5 }}>
            <Typography variant="h5" component="h4" >{account.name}</Typography>
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
