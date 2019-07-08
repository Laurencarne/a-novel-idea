import React, { Component } from "react";
import { Link } from "react-router-dom";

class Cart extends Component {
  renderBooks = () => {
    return this.props.cartBooks.map(cartBook => (
      <div className="innerCard">
        <Link
          style={{ textDecoration: "none" }}
          to={`/books/${cartBook.book.google_id}`}
        >
          <img
            className="book-img"
            src={cartBook.book.image}
            alt={cartBook.book.title}
          />
          <h3 className="bookTitleLink"> {cartBook.book.title} </h3>
          <h5 className="bookAuthorLink"> {cartBook.book.author} </h5>
          <p className="bookPriceLink"> £{cartBook.book.price} </p>
        </Link>
        <button onClick={() => this.handleClick(cartBook.id)}>Remove</button>
      </div>
    ));
  };

  handleClick = cartBookId => {
    this.deleteCartBookFromServer(cartBookId);
  };

  deleteCartBookFromServer = cartBookId => {
    return fetch(`http://localhost:3000/cart_books/${cartBookId}`, {
      method: "DELETE"
    })
      .then(respo => respo.json())
      .then(this.props.updateCart);
  };

  prices = () => this.props.cartBooks.map(cartBook => cartBook.book.price);

  total = () => this.prices().reduce((a, b) => a + b, 0);

  render() {
    return (
      <>
        <h1>{this.props.user.first_name}'s Basket</h1>
        <div className="Card">{this.renderBooks()}</div>
        <h3>Basket Total £{this.total()}</h3>
      </>
    );
  }
}

export default Cart;
