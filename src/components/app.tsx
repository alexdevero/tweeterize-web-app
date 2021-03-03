import React, { useContext, useState } from 'react'

import { State } from '../state/state'

import { tweeterize } from './../tweeterize/tweeterize'

import { AppFooter } from './app-footer'
import { AppHeader } from './app-header'
import { AppMessages } from './app-messages'
import { Form } from './form'

function App() {
  const { state, handleStateChange } = useContext(State)
  const [limit, setLimit] = useState(240)

  const handleTextTweeterizing = () => {
    handleStateChange('textFormatted', tweeterize(state.textOriginal, limit))
  }

  return (
    <div className="app">
      <div className="container">
        <div className="app-main-content row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <AppHeader />

            <Form
              defaultValue={limit}
              handleInputChange={setLimit}
              handleTextareaChange={handleStateChange}
              handleTweeterizeButton={handleTextTweeterizing}
            />

            {/* Formatted messages */}
            {state.textFormatted.length > 0 && (
              <AppMessages messages={state.textFormatted} />
            )}
          </div>
        </div>

        <AppFooter />
      </div>
    </div>
  )
}

export default App
