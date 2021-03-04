import React from 'react'
import ReactDOM from 'react-dom'

import { AppMessages } from './app-messages'

test('App messages render without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<AppMessages messages={['This is just a test.']} />, div)
})
