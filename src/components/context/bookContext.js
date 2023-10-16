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
  const sortBookList = (book) => {
    console.log('Book :: ', book)
    setUpdatedBookList(book)
  }
  useEffect(() => {
    console.log('logged in effect')
  }, [updatedBooksList])
  return (
    <BookContextProvider.Provider
      value={{
        updatedBooksList,
        setUpdatedBookList,
        createBookClicked,
        sortBookList,
      }}
    >
      {children}
    </BookContextProvider.Provider>
  )
}
export default BookContext
