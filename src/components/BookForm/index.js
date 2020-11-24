import React from 'react'
import Input from '../Input'

const BookForm = ({ initialValues, handleSubmit }) => {
  const [book, setBook] = React.useState(initialValues)

  const handleChange = (event) => {
    const { name, value } = event.target

    setBook({
      ...book,
      [name]: value
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()

    handleSubmit(book)
  }

  return (

    <form onSubmit={onSubmit}>
      <Input
        label="Title"
        id="book[title]"
        name="title"
        onChange={handleChange}
        value={book.title}
      />

      <Input
        label="Author"
        id="book[author]"
        name="author"
        onChange={handleChange}
        value={book.author}
      />

      <Input
        label="Pages"
        id="book[pages]"
        name="pages"
        onChange={handleChange}
        value={book.pages}
        type="number"
      />

      <input type="submit" value="Submit" />
    </form>
  )
}

export default BookForm