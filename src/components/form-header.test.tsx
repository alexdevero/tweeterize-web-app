import React from 'react'
import ReactDOM from 'react-dom'

import { AppHeader } from './app-header'

test('Form header renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<AppHeader defaultValue={40} handleInputChange={() => {}} />, div)
})
