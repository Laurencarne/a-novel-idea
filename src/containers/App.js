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
import SignInForm from "../components/SignInForm";
import { validate } from '../services/api';
import Inventory from '../pages/Inventory';
import Header from "../pages/Header";



const BASEURL = "https://www.googleapis.com/books/v1/volumes";

class App extends Component {
  state = {
    books: [],
    username: ''

  };

  signin = (user) => {
    this.setState({ username: user.username })
    localStorage.setItem('token', user.token)
    this.props.history.push('/inventory')
  }

  signout = () => {
    this.setState({ username: '' })
    localStorage.removeItem('token')
  }

  componentDidMount() {
    if (localStorage.token) {
      validate()
        .then(data => {
          if (data.error) {
            alert(data.error)
          } else {
            this.signin(data)
          }
        })
    }
  }

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
    const { signin, signout } = this
    const { username } = this.state
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Header username={username} signout={signout} />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/books" exact render={() => <Books books={this.state.books} />} />
            <Route path="/fiction" exact render={() => <Fiction books={this.state.fiction} />} />
            <Route path="/books/:id" exact component={BookInformation} />
            <Route path="/orders" exact component={Orders} />
            <Route path="/wishlists" exact component={Wishlists} />
            <Route path='/signin' component={props => <SignInForm signin={signin} {...props} />} />
            <Route path='/inventory' component={props => <Inventory username={username} {...props} />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
