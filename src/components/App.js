import React from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

const App = () => {
  const navigate = useNavigate()
  const searchHandler = (e) => {
    e.preventDefault()
    return navigate('/books')
  }
  return (
    <section className="container">
      <div className="header">
        <header>Story Books Home</header>
      </div>
      <div className="story-btn">
        <button
          style={{
            padding: '10px',
            fontSize: '18px',
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
          }}
          onClick={searchHandler}
        >
          Search
        </button>
      </div>
    </section>
  )
}
export default App
