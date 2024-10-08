import React from 'react'

function RenderingLists() {
    const booklist = [
        'book 1',
        'book 2',
        'book 3'
    ]

    const books = [{
      title: 'book title 1',
      author: 'harper lee',
      pages: 156
    },
    {
      title: 'book title 2',
      author: 'f scott',
      pages: 230
    },
    {
      title: 'book title 3',
      author: 'salinger',
      pages: 325
    }]

  return (
    <div>
        {booklist.map(book => {
            return <h2 key={book}>{book}</h2>
        })}
        <hr />
        {
          books.map(book => {
            return <div key={book.title}>
              <h5>{book.title}</h5>
              <p>{book.author}</p>
              <p>{book.pages}</p>
            </div>
          })
        }
    </div>
  )
}

export default RenderingLists