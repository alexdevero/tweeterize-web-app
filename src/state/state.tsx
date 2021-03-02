import React, { createContext, useState } from 'react'

interface StateUI {
  children: React.ReactNode;
}

export const State = createContext({
  state: {
    textOriginal: '',
    textFormatted: []
  },
  handleStateChange: (textType: 'textOriginal' | 'textFormatted', value: string | string[]) => {}
})

export const StateProvider = (props: StateUI) => {
  const [state, setState] = useState({
    textOriginal: '',
    textFormatted: []
  })

  const handleStateChange = (textType: 'textOriginal' | 'textFormatted', value: string | string[]) => {
    setState({
      ...state,
      [textType]: value
    })
  }

  return (
    <State.Provider value={{ state, handleStateChange }}>
      {props.children}
    </State.Provider>
  )
}
