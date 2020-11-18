import { Component } from 'react'

import httpService from '../../services/httpService'
import Input from '../../components/Input'

class NewBook extends Component {
  constructor() {
    super()

    this.state = {
      title: "",
      pages: 0,
      author: "",
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const book = this.state

    httpService.post('/books', book)
      .then(response => {
        alert('Success')
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    const book = this.state

    return (
      <>
        <h1> New Book </h1>

        <form onSubmit={this.handleSubmit}>
          <Input
            label="Title"
            id="book[title]"
            name="title"
            onChange={this.handleChange}
            value={book.title}
          />

          <Input
            label="Author"
            id="book[author]"
            name="author"
            onChange={this.handleChange}
            value={book.author}
          />

          <Input
            label="Pages"
            id="book[pages]"
            name="pages"
            onChange={this.handleChange}
            value={book.pages}
            type="number"
          />

          <input type="submit" value="Submit" />
        </form>
      </>
    )
  }

}

export default NewBook
