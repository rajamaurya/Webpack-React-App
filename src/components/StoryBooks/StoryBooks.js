import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import './StoryBooks.css'
import Book from '../Book/Book'
import AddBook from '../AddBook/AddBook'
import { BookContextProvider } from '../context/bookContext'
import BookSort from '../BookSort/BookSort'

const StoryBooks = () => {
  const { updatedBooksList, sortBookList } = useContext(BookContextProvider)

  const [storyBooks, setStoryBooks] = useState([...updatedBooksList])
  const [isLoading, setIsLoading] = useState(true)

  const URL = 'api-data.json'
  const headers = [
    'Author',
    'Country',
    'ImageLink',
    'Language',
    'Link',
    'Price',
    'Title',
    'Year',
  ]

  useEffect(() => {
    const loadStoryBooks = async () => {
      setIsLoading(true)

      setTimeout(async () => {
        let data = []
        if (storyBooks.length == 0) {
          const books = await axios.get(URL)
          data = books.data
          setIsLoading(false)
          sortBookList(data)
          setStoryBooks(data)
        } else {
          setIsLoading(false)
        }
      }, 2000)
    }
    loadStoryBooks()
  }, [])

  const filterHandler = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className="storyBooksListContainer">
        <div className="store-header">Online Book Store</div>
        <h4
          style={{
            float: 'left',
            marginLeft: '10%',
            marginTop: '6%',
            color: 'steelblue',
          }}
        >
          Checkout_Prime_Books
        </h4>
        <nav className="nav-items">
          <div className="total_count">{storyBooks.length} records</div>

          <div className="filter" onClick={filterHandler}>
            Filters
          </div>
          <AddBook />
          <BookSort bookstosort={storyBooks} />
        </nav>
        <div className="row">
          <div className="header">
            {headers.map((header) => {
              return (
                <div className="header-name" key={header}>
                  {header}
                </div>
              )
            })}
          </div>
          {!isLoading ? (
            storyBooks &&
            storyBooks.map((book, index) => {
              return <Book book={book} key={index} />
            })
          ) : (
            <span
              style={{
                padding: '10px',
                position: 'absolute',
                margin: '0px auto',
                left: '45%',
                top: '50%',
                fontSize: '18px',
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
              }}
            >
              Loading...
            </span>
          )}
        </div>
      </div>
    </>
  )
}

export default StoryBooks
