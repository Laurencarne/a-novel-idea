import React, { Component } from "react";
import { Link } from "react-router-dom";

const BASEURL = "https://www.googleapis.com/books/v1/volumes";

class Books extends Component {
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

  renderBook = () => {
    return this.state.books.map(book => (
      <div className="innerCard">
        <Link to={`/books/${book.id}`}>
          <h3> {book.volumeInfo.title} </h3>
          <img
            className="book-img"
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
          />
        </Link>
      </div>
    ));
  };

  render() {
    return <div className="Card">{this.renderBook()}</div>;
  }
}

export default Books;
