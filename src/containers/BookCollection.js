import React, { Component } from "react";
import Books from "../components/Books";

const BASEURL = "https://www.googleapis.com/books/v1/volumes";

class BookCollection extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    fetch(
      BASEURL +
        '?q=""&printType=books&orderBy=newest&maxResults=40&langRestrict="en"'
    )
      .then(resp => resp.json())
      .then(data => this.setState({ books: data.items }));
  }

  renderBooks = () => {
    return this.state.books.map(book => <Books book={book} key={book.id} />);
  };
  render() {
    return <div className="Card">{this.renderBooks()}</div>;
  }
}

export default BookCollection;
