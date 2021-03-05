import React from 'react';


function BookList(props) {
  return (
    {const mappedBooks = props.books.map((e) => {
      return 
    })}
    <div className="books">{mappedBooks.map(element) => {
    <img src={mappedBooks.img} onClick={props.addToShelf}/>,
    <p>{mappedBooks.title}</p>,
    <p>{mappedBooks.name}</p>
    }
    
    </div>
  );
}

export default BookList
