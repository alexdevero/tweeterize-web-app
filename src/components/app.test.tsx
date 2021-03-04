import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './app'

test('App heading renders "Tweeterize"', () => {
  render(<App />)

  const linkElement = screen.getByText('Tweeterize')

  expect(linkElement).toBeInTheDocument()
});
