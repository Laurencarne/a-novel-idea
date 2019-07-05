import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Orders from "../components/Orders";
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
    this.fetchBooksFromSever();
    this.fetchFilteredBooksFromServer("fiction");
  }

  fetchBooksFromSever = () => {
    fetch(
      BASEURL +
        '?q=""&printType=books&orderBy=newest&maxResults=40&langRestrict=en'
    )
      .then(resp => resp.json())
      .then(data => this.setState({ books: data.items }));
  };

  fetchFilteredBooksFromServer = genre => {
    return fetch(
      BASEURL +
        `?q=%22%22+subject:${genre}&printType=books&orderBy=newest&maxResults=40&langRestrict=en`
    )
      .then(resp => resp.json())
      .then(data => this.setState({ [genre]: data.items }));
  };

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
            <Route path="/wishlists" exact component={Wishlists} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
