import React, { useState, createContext, useEffect } from 'react'
import { useNavigate } from 'react-router'

export const BookContextProvider = createContext()
export const Consumer = BookContextProvider.Consumer

const BookContext = ({ children }) => {
  const [updatedBooksList, setUpdatedBookList] = useState([])
  const navigate = useNavigate()

  const createBookClicked = (book) => {
    setUpdatedBookList(book)
    navigate('/books')
  }
  useEffect(() => {}, [updatedBooksList])
  return (
    <BookContextProvider.Provider
      value={{
        updatedBooksList,
        createBookClicked,
      }}
    >
      {children}
    </BookContextProvider.Provider>
  )
}
export default BookContext
