import React, { Component } from "react";
import { Link } from "react-router-dom";

const BASEURL = "https://www.googleapis.com/books/v1/volumes";

class BookInformation extends Component {
  state = {
    clicked: false,
    book: [],
    image: {},
    genre: [],
    price: {},
    id: ""
  };

  componentDidMount() {
    fetch(BASEURL + `/${this.props.match.params.id}`)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          book: data.volumeInfo,
          image: data.volumeInfo.imageLinks,
          genre: data.volumeInfo.categories[0],
          price: data.saleInfo.listPrice,
          id: data.id
        })
      );
  }

  // renderCartButton = () => {
  //   if (!localStorage.getItem("basket").includes(this.state.id)) {
  //     return (
  //       <>
  //         <button onClick={this.handleCartClick}> Add to Cart </button>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <Link to="/cart" style={{ textDecoration: "none" }}>
  //           <button> View Cart </button>
  //         </Link>
  //       </>
  //     );
  //   }
  // };

  // renderWishButton = () => {
  //   if (!localStorage.getItem("basket").includes(this.state.id)) {
  //     return (
  //       <>
  //         <button onClick={this.handleWishClick}> Add to WishList </button>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <Link to="/wishlists" style={{ textDecoration: "none" }}>
  //           <button> View WishList </button>{" "}
  //         </Link>
  //       </>
  //     );
  //   }
  // };

  handleCartClick = e => {
    this.setState({
      clicked: true
    });
    console.log("Clicked");

    const cart_book = {
      cart_id: 1,
      book_id: 5
    };

    e.preventDefault();

    this.addBookToServer(this.setBookDetails());
    this.addBookToCartOnServer(cart_book);
  };

  addBookToServer = book => {
    return fetch(`http://localhost:3000/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    });
  };

  addBookToCartOnServer = cart_book => {
    return fetch(`http://localhost:3000/cart_books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cart_book)
    });
  };

  // handleWishClick = e => {
  //   console.log("Clicked");
  //   e.preventDefault();
  //   this.addBookToServerWishlist(this.setBookDetails());
  // };
  //
  // addBookToServerWishlist = book => {
  //   return fetch(`http://localhost:3000/wishlists`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(book)
  //   }).then(resp => resp.json());
  // };

  setBookDetails = () => {
    const book = {
      title: this.state.book.title,
      author: this.state.book.authors.join(),
      price: this.state.price.amount,
      image: this.state.image.thumbnail,
      publisher: this.state.book.publisher,
      description: this.state.book.description,
      genre: this.state.genre,
      publishedDate: this.state.book.publishedDate,
      pageCount: this.state.book.pageCount
    };
    return book;
  };

  render() {
    return (
      <div>
        <h1 className="bookTitle">{this.state.book.title}</h1>
        <img
          className="bookImage"
          src={this.state.image.thumbnail}
          alt={this.state.book.title}
        />
        <h2 className="bookAuthor">{this.state.book.authors}</h2>
        <p className="bookPriceLink">£{this.state.price.amount}</p>
        <h3 className="bookPublisher">
          Publisher: {this.state.book.publisher}
        </h3>
        <h4 className="bookPublishedDate">
          Published: {this.state.book.publishedDate}
        </h4>
        <h6 className="bookPageCount">
          Page Count: {this.state.book.pageCount}
        </h6>
        <h6 className="bookGenre"> Genres: {this.state.genre}</h6>
        <p
          className="bookDescription"
          dangerouslySetInnerHTML={{ __html: this.state.book.description }}
        />
        <button onClick={this.handleCartClick}> Add to Cart </button>
      </div>
    );
  }
}

export default BookInformation;
