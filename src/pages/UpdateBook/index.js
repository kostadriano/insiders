import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import httpService from '../../services/httpService'

const UpdateBook = () => {
  const [book, setBook] = useState({})

  const { bookId } = useParams()

  useEffect(() => {
    httpService(`/books/${bookId}`)
      .then(({ data }) => {
        setBook(data)
      })
  }, [])


  return <div>
    <h1>Update Book {book.title}</h1>
  </div>
}

export default UpdateBook