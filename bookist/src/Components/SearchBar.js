import React, {Component} from 'react';


export default class SearchBar extends Component {
  constructor() {
  super();
    this.state = {
      input: [],
    }
    const handleChange = this.handleChange.bind(this)
    const handleClick = this.handleClick.bind(this)
  }
  handleChange() {

  }
  handleClick() {

  }
  handleClear() {
    
  }
  render(){
  return(
    <input onChange={this.handleChange}>Text Input</input>
    <button className="search" onClick={this.handleClick}>Search</button>
    <button className="clearSearch">Clear Search</button>

  )
}

}