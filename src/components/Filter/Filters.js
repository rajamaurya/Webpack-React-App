import React, { useContext, useEffect, useRef, useState } from 'react'
import { BookContextProvider } from '../context/bookContext'
import './Filters.css'

const Filters = () => {
  const [isFilterClicked, setIsFilterClicked] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const { updatedBooksList } = useContext(BookContextProvider)

  const [availableAuthors, setAvailableAuthors] = useState([])
  useEffect(() => {
    const authorsFn = () => {
      let tempArr = [...updatedBooksList]
      tempArr = tempArr.map((author) => author['author'])
      setAvailableAuthors(tempArr)
    }
    authorsFn()
  }, [updatedBooksList])
  const filterHandler = (toggle) => {
    toggle = !toggle
    setIsFilterClicked(toggle)
  }

  const handleFilterChange = (e, index) => {
    e.preventDefault()
    availableAuthors.map((author) => author[index]) // set index pos check . pending.....
    setIsChecked(!isChecked)
  }

  return (
    <>
      <div className={!!isFilterClicked ? 'show' : 'hide'}>
        <div className="author-title">
          <span>
            <h4>Author</h4>
          </span>
        </div>
        <ul>
          {availableAuthors &&
            availableAuthors.map((author, index) => {
              return (
                <li key={index} className="authors-list">
                  <span>
                    <label htmlFor="author">
                      <input
                        type="checkBox"
                        name="author"
                        checked={isChecked}
                        onChange={() => handleFilterChange(index)}
                        multiple
                      />
                      {author}
                    </label>
                  </span>
                </li>
              )
            })}
        </ul>
      </div>
      <div className="filter" onClick={() => filterHandler(isFilterClicked)}>
        Filters
      </div>
    </>
  )
}
export default Filters
