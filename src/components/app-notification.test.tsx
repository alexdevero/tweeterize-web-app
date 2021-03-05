import React from 'react'
import ReactDOM from 'react-dom'

import { Notification } from './app-notification'

test('Notification renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <Notification
      handleNotificationClose={() => {}}
    />, div)
})
