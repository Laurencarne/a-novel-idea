import React, { Component } from "react";
import { Link } from "react-router-dom";

class Books extends Component {
  render() {
    return (
      <div className="innerCard">
        <Link to={`/books/${this.props.book.id}`}>
          <h3> {this.props.book.volumeInfo.title} </h3>
          <img
            className="book-img"
            src={this.props.book.volumeInfo.imageLinks.thumbnail}
            alt={this.props.book.volumeInfo.title}
          />
        </Link>
      </div>
    );
  }
}

export default Books;
