function putComma(startingIndex, amountArray) {
  // Initialize counter to add a comma every each 3 digits
  let counter = 0

  for (let index = startingIndex; index < amountArray.length; index++) {
    // Add a comma and reset the counter
    if(counter === 3) {
      amountArray.splice(index, 0, ',')
      counter = 0
    }else {
      // Keep counting until the third digit
      counter ++
    }
  }
}

function formatDecimals(amountString, amountArray) {
  // Check if the array has decimals
  const amountHasDecimals = amountArray.some(number => number === '.')
  let newAmountArray = []

  // If the amount does not has decimals, add two zeros
  if(!amountHasDecimals) {
    const decimals = ['.','0','0']
    newAmountArray = amountArray.concat(decimals)
  }else {
    const amountHasOneDecimal = /[0-9]+\.[0-9]{1,1}$/
    const amountHasTwoDecimals = /[0-9]+\.[0-9]{2,2}$/
    const amountHasMoreDecimals = /[0-9]+\.[0-9]{2,}$/
    // If the number has only one digit, add a zero at the end
    if(amountString.match(amountHasOneDecimal)) {
      newAmountArray = [...amountArray, '0']
    }else if(amountString.match(amountHasTwoDecimals)) {
      // If the number has only two digits, leave it as it is
      newAmountArray = [...amountArray]
    }else if(amountString.match(amountHasMoreDecimals)) {
      // If the number has more than 2 digits, fixed it with only two decimals
      const newAmount = Number(amountString).toFixed(2)
      // Convert the number intro String and the into an array
      newAmountArray = String(newAmount).split('')
    }
  }
  
  // Determine where the period is and only return the decimals
  const period = newAmountArray.indexOf('.')
  const decimals = newAmountArray.splice(period, 3)
  return decimals
}

const formatNumberToCurrency = (amount) => {
  //Remove decimals to format the number
  const amountWithoutDecimals = amount.toFixed(0)
  // Convert the number into a string and then into an array separating each digit
  const amountInString =  String(amountWithoutDecimals)
  const amountInArray = amountInString.split('')
  // Determine how many digits the number has
  const totalOfDigits = amountInArray.length

  //Put a comma if the amount is a thousanth
  if(totalOfDigits > 3) {
    // Determine where to put the first comma and then add a comma every each 3 digits
    switch(totalOfDigits % 3) {
      case 1:
        putComma(1, amountInArray)
        amountInArray.splice(1, 0, ',')
        break;
      case 2:
        putComma(2, amountInArray )
        amountInArray.splice(2, 0, ',')
        break;
      default:
        putComma(0, amountInArray)
        break;
    }
  }
  // Get the decimals by giving the original amount transformed in string and array
  const decimals = formatDecimals(String(amount), String(amount).split(''))

  //Add the amount formated with commas and the decimals toguether
  const currency = amountInArray.concat(decimals).join('')
  return currency
}

export { formatNumberToCurrency }
