import React, { useContext, useState } from 'react'

import { State } from '../state/state'

import { tweeterize } from './../tweeterize/tweeterize'

import { ReactComponent as BirdImage } from './../images/bird.svg'
import { Form } from './form'

function App() {
  const { state, handleStateChange } = useContext(State)
  const [limit, setLimit] = useState(240)

  const handleTextTweeterizing = () => {
    handleStateChange('textFormatted', tweeterize(state.textOriginal, limit))
  }

  console.log(state, limit)
  return (
    <div className="app">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <h1 className="app-heading text-center">Tweeterize</h1>

            <BirdImage className="app-logo mx-auto d-block" width="100" />

            <p className="app-hint-text mb-4 text-center">Paste your text into the container below:</p>

            <Form
              defaultValue={limit}
              handleInputChange={setLimit}
              handleTextareaChange={handleStateChange}
              handleTweeterizeButton={handleTextTweeterizing}
            />

            {/* Formatted messages */}
            <div className="mt-4">
              <h2 className="h5 mb-4">Your Formatted messages:</h2>

              {state.textFormatted.map((el, i) => {
                return <div className={`h6 font-weight-normal ${state.textFormatted.length !== 1 && i < state.textFormatted.length - 1 ? 'mb-4' : ''}`} key={i}>{el}</div>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
