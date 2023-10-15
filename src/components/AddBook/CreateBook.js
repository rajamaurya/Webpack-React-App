import React, { useContext, useState } from 'react'
import './form.css'
import { useLocation } from 'react-router'
import { BookContextProvider } from '../context/bookContext'

const CreateBook = (props) => {
  console.log('in createdBoook: ', props.state)
  const location = useLocation()
  console.log(location)

  const { updatedBooksList, createBookClicked } =
    useContext(BookContextProvider)

  const [formData, setFormData] = useState({
    author: '',
    country: '',
    imgLink: '',
    language: '',
    link: '',
    pages: '',
    title: '',
    year: '',
  })
  const handleChange = (e) => {
    let { name, value } = e.target
    console.log(name + ' : ' + value)
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
    console.log(formData)
  }
  const createBook = (e) => {
    e.preventDefault()
    createBookClicked([...updatedBooksList, formData])
  }
  return (
    <form className="book-form" onSubmit={createBook}>
      <div className="form-item">
        <label htmlFor="author">Author:</label> <br />
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
      </div>

      <div className="form-item">
        <label htmlFor="country">Country:</label> <br />
        <input
          type="country"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </div>

      <div className="form-item">
        <label htmlFor="imgLink">ImageLink:</label> <br />
        <input
          id="imgLink"
          name="imgLink"
          value={formData.imgLink}
          onChange={handleChange}
        />
      </div>

      <div className="form-item">
        <label htmlFor="language">Language:</label> <br />
        <input
          id="language"
          name="language"
          value={formData.language}
          onChange={handleChange}
        />
      </div>

      <div className="form-item">
        <label htmlFor="link">Link:</label> <br />
        <input
          id="link"
          name="link"
          value={formData.link}
          onChange={handleChange}
        />
      </div>

      <div className="form-item">
        <label htmlFor="pages">Price:</label> <br />
        <input
          id="pages"
          name="pages"
          value={formData.pages}
          onChange={handleChange}
        />
      </div>

      <div className="form-item">
        <label htmlFor="title">Title:</label> <br />
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div className="form-item">
        <label htmlFor="year">Year:</label> <br />
        <input
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
        />
      </div>
      <div className="form-btn">
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default CreateBook
