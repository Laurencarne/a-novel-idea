import React, { Component } from "react";
import { Link } from "react-router-dom";

class Books extends Component {
  renderBook = () => {
    return this.props.books.map(book => (
      <div className="innerCard">
        <Link to={`/books/${book.id}`}>
          <h3 className="bookTitleLink"> {book.volumeInfo.title} </h3>
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
