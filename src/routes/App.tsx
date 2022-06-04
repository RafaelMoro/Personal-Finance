import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Header} from '@pages/Header'
import {Accounts} from '@pages/Accounts'
import '@styles/globals.scss'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Accounts />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export {App}