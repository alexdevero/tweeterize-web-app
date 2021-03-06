import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'

ReactGA.initialize('G-C1KBVTY1HF')
ReactGA.pageview(window.location.pathname + window.location.search)

import './styles/index.css'
import './styles/app.css'

import { StateProvider } from './state/state'

import App from './components/app'

import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
