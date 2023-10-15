import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import './StoryBooks.css'
import Book from '../Book/Book'
import AddBook from '../AddBook/AddBook'
import { BookContextProvider } from '../context/bookContext'

const StoryBooks = () => {
  const { updatedBooksList } = useContext(BookContextProvider)

  const [storyBooks, setStoryBooks] = useState([])
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
        const books = await axios.get(URL)
        const data = books.data
        setIsLoading(false)
        setStoryBooks((prevData) => [...prevData, ...data, ...updatedBooksList])
      }, 2000)
    }
    loadStoryBooks()
  }, [])
  const filterHandler = (e) => {
    e.preventDefault()
  }
  const sortItemsrHandler = (e) => {
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

          <select className="sort-items" onChange={sortItemsrHandler}>
            <option selected> Sort by: featured</option>
            <option value="title">Price: low to high</option>
            <option value="title">Price: high to low</option>
          </select>
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
