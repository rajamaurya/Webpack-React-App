import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('story book home page', () => {
  test('show story book home page', () => {
    render(<App />)
    const header = screen.getByText(/Story Books Home/i)
    expect(header).toBeInTheDocument()
  })
})
