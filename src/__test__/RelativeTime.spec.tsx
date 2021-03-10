import * as React from 'react'
import { render, screen } from '@testing-library/react'
import RelativeTime from '../RelativeTime'

it('renders RelativeTime with JS Date.now()', () => {
  const date = new Date(Date.now())

  render(<RelativeTime time={date} />)

  expect(screen.getByText(/in [0-9]* seconds/)).toBeInTheDocument()
})
