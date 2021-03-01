import React, { useContext } from 'react'

import { State } from '../state/state'

import { ReactComponent as BirdImage } from './../images/bird.svg'

function App() {
  const { state, handleStateChange } = useContext(State)

  return (
    <div className="app">
      <h1 className="app-heading">Tweeterize</h1>

      <BirdImage className="app-logo" width="100" />
      <span>{state}</span>

      <p className="app-hint-text">Paste your text into the container below:</p>

      <textarea onChange={(e: HTMLTextAreaElement) => handleStateChange(e.target.value)} className="app-text-container" name="text" id="text" placeholder="Insert the text you want to format"></textarea>
    </div>
  )
}

export default App
