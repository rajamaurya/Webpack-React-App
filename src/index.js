import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StoryBooks from './components/StoryBooks/StoryBooks'
import CreateBook from './components/AddBook/CreateBook'
import BookContext, {
  BookContextProvider,
} from './components/context/bookContext'

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <BookContext>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/books" element={<StoryBooks />}></Route>
        <Route path="/create-book" element={<CreateBook />}></Route>
      </Routes>
    </BookContext>
  </BrowserRouter>
)
