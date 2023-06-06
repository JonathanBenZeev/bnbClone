import React from 'react'
import ReactDOM from 'react-dom/client'
import { RootCmp } from './root-cmp '
import { BrowserRouter as Router } from 'react-router-dom'
import './assets/styles/main.scss'
import { Provider } from 'react-redux'
import { store } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Router>
    <Provider store={store}>
      <RootCmp />
    </Provider>
  </Router>
)
