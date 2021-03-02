import React, { useContext, useState } from 'react'

import { State } from '../state/state'

import { tweeterize } from './../tweeterize/tweeterize'

import { ReactComponent as BirdImage } from './../images/bird.svg'

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

            <div className="row mb-2">
              <div className="col-md-6 col-lg-8 text-left">
                <label htmlFor="inputLimit" className="h6 font-weight-normal m-0">Message length limit:</label>
              </div>

              <div className="col-md-6 col-lg-4">
                <input onChange={(e) => setLimit(+e.currentTarget.value)} type="number" min="0" step="1" className="form-control" id="inputLimit" defaultValue={limit} />
              </div>
            </div>

            <textarea onChange={(e: any) => handleStateChange('textOriginal', e.target.value)} className="app-text-container" name="text" id="text" placeholder="Insert the text you want to format"></textarea>

            <button className="btn btn-primary px-3 py-2 d-block mx-auto" onClick={handleTextTweeterizing}>Tweeterize text</button>

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
