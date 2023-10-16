import React, { useContext, useState } from 'react'
import './BookSort.css'
import { BookContextProvider } from '../context/bookContext'

const BookSort = ({ bookstosort }) => {
  const [selectedOption, setSelectedOption] = useState('')
  const { sortBookList } = useContext(BookContextProvider)
  const defaultCopy = [...bookstosort]
  const sortItemsHandler = (e) => {
    const selOption = e.target.value
    setSelectedOption(selOption)
    switch (selOption) {
      case 'asc':
        {
          bookstosort.sort((a, b) => a['pages'] - b['pages'])
          sortBookList([...bookstosort])
        }
        break
      case 'desc':
        {
          bookstosort.sort((a, b) => b['pages'] - a['pages'])
          sortBookList([...bookstosort])
        }
        break
      case 'featured':
        {
          bookstosort.sort((a, b) => a['year'] - b['year'])
          sortBookList([...bookstosort])
        }
        break
      default:
        return sortBookList([...defaultCopy])
    }
  }
  return (
    <>
      <select
        className="sort-items"
        value={selectedOption}
        onChange={sortItemsHandler}
      >
        <option value="featured"> Sort by: featured</option>
        <option value="asc">Price: low to high</option>
        <option value="desc">Price: high to low</option>
      </select>
    </>
  )
}

export default BookSort
