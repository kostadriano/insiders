import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import httpService from '../../services/httpService'
import BookForm from '../../components/BookForm'

const UpdateBook = () => {
  const [book, setBook] = useState({})

  const { bookId } = useParams()

  useEffect(() => {
    httpService(`/books/${bookId}`)
      .then(({ data }) => {
        setBook(data)
      })
  }, [])

  const handleUpdate = (book) => {
    httpService.put(`/books/${book.id}`, book)
      .then(({ data }) => {
        console.log(data)
        alert('Deu certo!!')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return <div>
    <h1>Update Book {book.title}</h1>

    <BookForm
      handleSubmit={handleUpdate}
      initialValues={book}
    />
  </div>
}

export default UpdateBook