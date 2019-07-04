import React, { Component } from "react";
// import BooksPage from "./containers/BooksPage";



class App extends Component {

  state = {
    books: [],


  };
  componentDidMount() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=pride+prejudice?maxResults=100maxResults=10")
      .then(resp => resp.json())
      .then(data => this.setState({ books: data }));
  }





  render() {
    return (
      <div className="App">

      </div>
    );
  }
}
export default App;
