import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Orders from "../components/Orders";
import Cart from "../components/Cart";
import Wishlists from "../components/Wishlists";
import Books from "../components/Books";
import Fiction from "../components/Fiction";
import BookInformation from "../components/BookInformation";

const BASEURL = "https://www.googleapis.com/books/v1/volumes";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.fetchBooksFromSever().then(this.addVerifiedBooksToState());
    localStorage.setItem("CartIDs", [localStorage.getItem("CartIDs") + ""]);
    localStorage.setItem("WishIDs", [localStorage.getItem("WishIDs") + ""]);
  }

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
            <Route path="/orders" exact component={Orders} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/wishlists" exact component={Wishlists} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
