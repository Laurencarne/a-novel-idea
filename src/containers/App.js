import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Home from "../components/Home";
// import Books from "../components/Books";
import Orders from "../components/Orders";
import Wishlists from "../components/Wishlists";
import Books from "../components/Books";
import BookInformation from "../components/BookInformation";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/books" exact component={Books} />
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
