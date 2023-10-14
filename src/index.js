import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StoryBooks from './components/StoryBooks/StoryBooks'

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/books" element={<StoryBooks />}></Route>
    </Routes>
  </BrowserRouter>
)
