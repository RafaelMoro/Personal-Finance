import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Records: FC<Props> = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  )
}

export {Records}