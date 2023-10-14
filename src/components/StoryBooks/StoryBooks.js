import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './StoryBooks.css'
import Book from '../Book/Book'

const StoryBooks = () => {
  const [storyBooks, setStoryBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const URL = 'api-data.json'
  const headers = [
    'Author',
    'Country',
    'ImageLink',
    'Language',
    'Link',
    'Pages',
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
        setStoryBooks(data)
      }, 2000)
    }
    loadStoryBooks()
  }, [])

  return (
    <>
      <div className="storyBooksListContainer">
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
