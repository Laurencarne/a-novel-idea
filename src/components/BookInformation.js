import React, { Component } from "react";

const BASEURL = "https://www.googleapis.com/books/v1/volumes";

class BookInformation extends Component {
  state = {
    book: [],
    image: {},
    genre: []
  };

  componentDidMount() {
    fetch(BASEURL + `/${this.props.match.params.id}`)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          book: data.volumeInfo,
          image: data.volumeInfo.imageLinks,
          genre: data.volumeInfo.categories[0]
        })
      );
  }

  render() {
    return (
      <div>
        <h1>Title: {this.state.book.title}</h1>
        <img src={this.state.image.thumbnail} alt={this.state.book.title} />
        <h2>Author: {this.state.book.authors}</h2>
        <h3>Publisher: {this.state.book.publisher}</h3>
        <h4>Published Date: {this.state.book.publishedDate}</h4>
        <h6>Page Count: {this.state.book.pageCount}</h6>
        <h6> Genres: {this.state.genre}</h6>
        <p dangerouslySetInnerHTML={{ __html: this.state.book.description }} />
      </div>
    );
  }
}

export default BookInformation;
