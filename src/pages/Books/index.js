import React from 'react'
import httpService from '../../services/httpService'
import { Link } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core'

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
        this.setState({ books: data })
      })
      .catch(error => {
        console.error(error)
      })
  }

  handleDeleteBook = (id) => {
    httpService.delete(`/books/${id}`)
      .then(() => {
        const { books } = this.state

        const updatedBooks = books.filter(
          book => book.id !== id
        )

        this.setState({
          books: updatedBooks
        })
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
              <li key={book.id}>
                <Typography component="span">{book.title}</Typography>

                <Button onClick={() => this.handleDeleteBook(book.id)} variant="outlined" color="secondary">
                  DELETE
                </Button>
              </li>
            )
          }
        </ul>
        <Link to="/new-book">New Book</Link>
      </div>
    )
  }
}

export default Books