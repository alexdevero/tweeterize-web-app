import React from 'react'
import ReactDOM from 'react-dom'

import { Form } from './form'

test('Form renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <Form
      defaultValue={140}
      handleInputChange={() => {}}
      handleTextareaChange={() => {}}
      handleTweeterizeButton={() => {}}
    />, div)
})
