// import React from "react";
// import BookCollection from "./BookCollection";
// import UserOrder from "./UserOrder";

// class BooksPage extends React.Component {

//     constructor() {
//         super();
//         this.state = {
//             books: [],
//             orderbooks: [],
//             wishbooks: []

//         };
//     }



//     addBooks = (book) => {
//         if (!(this.state.orderbooks.includes(book))) {
//             const newOrderBooks = this.state.orderbooks;
//             newOrderBooks.push(book);
//             this.setState({
//                 orderbooks: newOrderBooks
//             })
//         }
//     }

//     render() {
//         return (
//             <div id="BookPage_Id">
//                 <UserOrder
//                     orderbooks={this.state.orderbooks}
//                 />
//                 {
//                     <BookCollection
//                         books={this.state.books}
//                     />
//                 }
//             </div>
//         );
//     }
// }

// export default BooksPage;