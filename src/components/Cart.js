import React, { Component } from "react";
import { Link } from "react-router-dom";

class Cart extends Component {
  state = {
    clicked: false
  };

  renderBooks = () => {
    return this.props.cart.map(book => (
      <div className="innerCard">
        <Link style={{ textDecoration: "none" }} to={`/books/${book.id}`}>
          <img className="book-img" src={book.image} alt={book.title} />
          <h3 className="bookTitleLink"> {book.title} </h3>
          <h5 className="bookAuthorLink"> {book.author} </h5>
          <p className="bookPriceLink"> £{book.price} </p>
        </Link>
        <button onClick={() => this.handleClick(book.id)}>Remove</button>
      </div>
    ));
  };

  handleClick = book => {
    this.setState({
      clicked: !this.state.clicked
    });
    console.log(book);
  };

  render() {
    return (
      <>
        <h1>{this.props.user.first_name}'s Cart</h1>
        <div className="Card">{this.renderBooks()}</div>
      </>
    );
  }
}

export default Cart;
