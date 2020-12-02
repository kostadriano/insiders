import { Component } from 'react'

import httpService from '../../services/httpService'
import BookForm from '../../components/BookForm'

class NewBook extends Component {
  constructor() {
    super()
  }

  handleSubmit = (book) => {
    httpService.post('/books', book)
      .then(response => {
        alert('Success')
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    return (
      <>
        <h1> New Book </h1>

        <BookForm
          handleSubmit={this.handleSubmit}
        />
      </>
    )
  }

}

export default NewBook
