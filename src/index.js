import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import {App} from './routes/App'

const container = document.getElementById('app')
const root = ReactDOMClient.createRoot(container)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
