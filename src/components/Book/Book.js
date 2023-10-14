import React from 'react'
import './Book.css'
import { Link } from 'react-router-dom'
const Book = ({ book }) => {
  return (
    <>
      {
        <div className="item-col">
          <div className="item">{book.author}</div>
          <div className="item">{book.country}</div>
          <div className="item">
            <img
              className="book-image"
              src="images/bhagavad-gita.png"
              alt="img"
            />
          </div>
          <div className="item">{book.language}</div>
          <div className="item">
            {' '}
            <Link to={book.link} style={{ padding: 5 }}>
              link
            </Link>
          </div>
          <div className="item">{book.pages}</div>
          <div className="item">{book.title}</div>
          <div className="item">{book.year}</div>
        </div>
      }
    </>
  )
}

export default Book
