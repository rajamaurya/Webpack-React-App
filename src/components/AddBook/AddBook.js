import React from 'react'
import { useNavigate } from 'react-router'
const AddBook = () => {
  const navigate = useNavigate()
  const addNewBookHandler = (e) => {
    e.preventDefault()
    navigate('/create-book')
  }

  return (
    <div className="add-book" onClick={addNewBookHandler}>
      + Add Book
    </div>
  )
}
export default AddBook
