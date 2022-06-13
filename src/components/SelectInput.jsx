import React, { useState } from 'react'
import { Select, MenuItem, InputLabel, FormControl  } from '@mui/material'

// The name of the input, id, the label name and the options to be rendered are recieved.
const SelectInput = ({ name, id, labelName, options }) => {
  // The option selected is handled by using the onChange event to set the selected option to the state.
  const [state, setState] = useState('')
  return (
    <FormControl>
      <InputLabel id={id}>{ labelName }</InputLabel>
      <Select id={id} value={state} label={labelName} name={name} onChange={(event) => setState(event.target.value)} >
        { options.map(option => (<MenuItem key={option} value={option}>{ option }</MenuItem>)) }
      </Select>
    </FormControl>
  )
}

export {SelectInput}