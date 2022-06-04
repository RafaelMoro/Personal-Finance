import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Accounts: FC<Props> = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  )
}

export {Accounts}