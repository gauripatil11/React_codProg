import React from 'react'
import { Form } from 'react-router-dom'

function SearchForm({searchTerm}) {
  return (
    <Form>
        <input type="text" name='search' id='search' required defaultValue={searchTerm}/>
        <button type='submit'>Search</button>
    </Form>
  )
}

export default SearchForm