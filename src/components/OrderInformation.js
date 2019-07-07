import React, { Component } from "react";
import { Link } from "react-router-dom";

class OrderInformation extends Component {
  state = {
    books: []
  };
  componentDidMount() {
    fetch(`http://localhost:3000/orders/${this.props.match.params.id}`)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          books: [...this.state.books, data.books.map(book => book)]
        })
      );
  }

  renderBooks = () =>
    this.state.books.map(books =>
      books.map(book => (
        <div className="innerCard">
          <Link style={{ textDecoration: "none" }} to={`/books/${book.id}`}>
            <img className="book-img" src={book.image} alt={book.title} />
            <h3 className="bookTitleLink"> {book.title} </h3>
            <h5 className="bookAuthorLink"> {book.author} </h5>
            <p className="bookPriceLink"> £{book.price} </p>
          </Link>
          <button onClick={() => this.handleClick(book.id)}>Remove</button>
        </div>
      ))
    );

  render() {
    return (
      <>
        <h1>Order Information Page</h1>
        <div className="Card">{this.renderBooks()}</div>
      </>
    );
  }
}

export default OrderInformation;
