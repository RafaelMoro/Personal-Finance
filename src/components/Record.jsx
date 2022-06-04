import React from 'react'

const Record = ({ record }) => {
  return (
    <section>
      <h5>{record.shortName}</h5>
      <p>{record.description}</p>
      <p>{record.amount}</p>
    </section>
  )
}

export {Record}