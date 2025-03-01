import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppProviders } from './app.provider'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root')
)

serviceWorker.unregister()
