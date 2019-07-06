import React, { Component } from "react";
import { Link } from "react-router-dom";

class Books extends Component {
  renderBook = () => {
    return this.props.books.map(book => (
      <div className="innerCard">
        <Link style={{ textDecoration: "none" }} to={`/books/${book.id}`}>
          <img
            className="book-img"
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
          />
          <h3 className="bookTitleLink"> {book.volumeInfo.title} </h3>
          <h5 className="bookAuthorLink"> {book.volumeInfo.authors} </h5>
          <p className="bookPriceLink"> £{book.saleInfo.listPrice.amount} </p>
        </Link>
      </div>
    ));
  };

  render() {
    return <div className="Card">{this.renderBook()}</div>;
  }
}

export default Books;
