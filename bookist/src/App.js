import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import BookList from './Components/BookList';
import Shelf from './Components/Shelf';
import data from './data';
import SearchBar from './Components/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: data,
      shelf: [],
    };
  function App() {
    return (
      <div className="App">
       <Header />
       <SearchBar filterBooks={this.filterBooks} search={this.search} />
       <BookList books={this.state.books} addToShelf={this.addToShelf} />
       <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf}/>
      </div>
    );
  }
  const addToShelf = this.addToShelf.bind(this)
  const clearShelf = this.clearShelf.bind(this)
  const fitlerBooks = this.filterBooks.bind(this)
  const reset = this.reset.bind(this)
}
addToShelf() {
    
}
clearShelf() {

}
filterBooks(input) {

}
reset() [

]
}


export default App;
