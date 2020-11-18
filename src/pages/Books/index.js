import React from 'react'
import httpService from '../../services/httpService'

class Books extends React.Component {
  constructor() {
    super()

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    httpService.get('/books')
      .then(({ data }) => {
        console.log(data)

        this.setState({ books: data })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    const { books } = this.state

    return (
      <div>
        <h1>Books</h1>

        <ul>
          {
            books.map(book =>
              <li key={book.id}>{book.title}</li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default Books