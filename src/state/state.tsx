import React, { createContext, useState } from 'react'

interface StateUI {
  children: React.ReactNode;
}

export const State = createContext({
  text: '',
  handleTextChange: (text: string) => {}
})

export const StateProvider = (props: StateUI) => {
  const [state, setState] = useState({
    text: ''
  })

  const handleStateChange = (text: string) => {
    setState(text)
  }

  return (
    <State.Provider value={{ state, handleStateChange }}>
      {props.children}
    </State.Provider>
  )
}
