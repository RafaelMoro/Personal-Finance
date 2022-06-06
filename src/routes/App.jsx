import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '@pages/Header'
import { Main } from '@pages/Main'
import '@styles/main.scss'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export {App}