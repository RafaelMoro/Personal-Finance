import React from 'react'

const Account = ({ account }) => {
  return (
    <section>
      <h4>{ account.name }</h4>
      <p>{account.type}</p>
      <p>${account.initialAmount}</p>
    </section>
  )
}

export {Account}
