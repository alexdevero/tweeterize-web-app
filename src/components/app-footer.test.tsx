import React from 'react'
import ReactDOM from 'react-dom'

import { AppFooter } from './app-footer'

test('App footer renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<AppFooter />, div)
})
