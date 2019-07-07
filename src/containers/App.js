import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Login from "../components/Login";
import Orders from "../components/Orders";
import OrderInformation from "../components/OrderInformation";
import Cart from "../components/Cart";
import Wishlists from "../components/Wishlists";
import Books from "../components/Books";
import Fiction from "../components/Fiction";
import BookInformation from "../components/BookInformation";

const BASEURL = "https://www.googleapis.com/books/v1/volumes";

class App extends Component {
  state = {
    books: [],
    // userId: 1,
    currentUser: {},
    currentUsersOrders: [],
    currentUsersWishlist: [],
    currentUsersCart: []
  };

  componentDidMount() {
    this.fetchBooksFromSever().then(this.addVerifiedBooksToState());
    this.fetchUsersFromServer().then(this.addUserToState());
    // if (localStorage.getItem("User")) {
    //   this.setAndFetchUser(JSON.parse(localStorage.getItem("User")));
    // }
  }

  fetchUsersFromServer = () =>
    fetch(`http://localhost:3000/users/1`).then(resp => resp.json());

  addUserToState = () => data =>
    this.setState({
      currentUser: data,
      currentUsersOrders: data.orders,
      currentUsersWishlist: data.wishlist.books,
      currentUsersCart: data.cart.books
    });

  fetchBooksFromSever = () => {
    return fetch(
      BASEURL +
        '?q=""&printType=books&orderBy=newest&maxResults=40&langRestrict=en'
    ).then(resp => resp.json());
  };

  addVerifiedBooksToState = () => {
    return data =>
      data.items.map(book => {
        if (
          book.saleInfo.listPrice &&
          book.volumeInfo.title &&
          book.volumeInfo.authors &&
          book.volumeInfo.publisher &&
          book.volumeInfo.publishedDate &&
          book.volumeInfo.description &&
          book.volumeInfo.imageLinks &&
          book.searchInfo.textSnippet
        ) {
          this.setState({
            books: [...this.state.books, book]
          });
        }
      });
  };

  // setAndFetchUser = currentUser => {
  //   this.setState({
  //     userId: currentUser
  //   });
  //   fetch(`http://localhost:3000/users/${currentUser}`).then(resp =>
  //     resp.json().then(data =>
  //       this.setState({
  //         currentUser: data
  //       })
  //     )
  //   );
  // };

  // setUser = currentUser => {
  //   localStorage.setItem("User", JSON.stringify(currentUser));
  //   this.setState({
  //     userId: currentUser
  //   });
  //   this.setAndFetchUser(currentUser);
  // };

  // fetchFilteredBooksFromServer = genre => {
  //   return fetch(
  //     BASEURL +
  //       `?q=%22%22+subject:${genre}&printType=books&orderBy=newest&maxResults=40&langRestrict=en`
  //   )
  //     .then(resp => resp.json())
  //     .then(data => this.setState({ [genre]: data.items }));
  // };

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/login"
              exact
              render={() => (
                <Login fetchUsers={this.fetchUsers} setUser={this.setUser} />
              )}
            />
            <Route
              path="/books"
              exact
              render={() => <Books books={this.state.books} />}
            />
            <Route
              path="/fiction"
              exact
              render={() => <Fiction books={this.state.fiction} />}
            />
            <Route path="/books/:id" exact component={BookInformation} />
            <Route
              path="/orders"
              exact
              render={() => (
                <Orders
                  user={this.state.currentUser}
                  orders={this.state.currentUsersOrders}
                />
              )}
            />
            <Route path="/orders/:id" exact component={OrderInformation} />
            <Route
              path="/cart"
              exact
              render={() => (
                <Cart
                  user={this.state.currentUser}
                  cart={this.state.currentUsersCart}
                />
              )}
            />
            <Route
              path="/wishlists"
              exact
              render={() => (
                <Wishlists
                  user={this.state.currentUser}
                  wishlist={this.state.currentUsersWishlist}
                />
              )}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
