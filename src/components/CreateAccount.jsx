import React from 'react'
import { Button, Grid, Typography } from '@mui/material'

const CreateAccount = () => {
  return (
    <Grid item xs={4}>
      <Button variant="outlined" sx={{ p: 2, mb: 10, mt: 5 }}>
        <Typography variant="subtitle1" component="h3" >Create Account</Typography>
      </Button>
    </Grid>
  )
}

export { CreateAccount }