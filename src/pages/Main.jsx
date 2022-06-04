import React from 'react'
import { Accounts } from '@containers/Accounts'
import { Records } from '@containers/Records'
import { Account } from '@components/Account'
import { Record } from '@components/Record'

const Main = () => {
  const accounts = [
    {
      name: "BBVA Bancomer",
      type: "Debit",
      initialAmount: 2000
    },
    {
      name: "Sodexo",
      type: "Food Voucher",
      intialAmount: 2500
    }
  ]
  const records = [
    {
      shortName: "Oxxo six cervezas",
      description: "Un six de chelas",
      amount: 150
    },
    {
      shortName: "Cigarros",
      description: "cigarros pa la peda",
      amount: 65
    }
  ]
  return (
    <main>
      <Accounts>
        {
          accounts.map((account, index) => ( <Account key={index} /> ))
        }
      </Accounts>
      <Records>
        {
          records.map((record, index) => ( <Record key={index} /> ))
        }
      </Records>
    </main>
  )
}

export {Main}