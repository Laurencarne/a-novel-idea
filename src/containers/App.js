import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Books from "../components/Books";
import Orders from "../components/Orders";
import Wishlists from "../components/Wishlists";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    fetch(BASEURL + "&printType=books&orderBy=newest&maxResults=40")
      .then(resp => resp.json())
      .then(data => this.setState({ books: data }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/books" exact component={Books} />
            <Route path="/orders" component={Orders} />
            <Route path="/wishlists" component={Wishlists} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
