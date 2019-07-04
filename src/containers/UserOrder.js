// import React from "react";
// import BookCard from "../components/BookCard";

// class UserOrder extends React.Component {

//     constructor(props) {
//         super(props);
//         this.deleteBook = props.deleteBook;
//         this.state = {
//             orderbooks: props.orderbooks
//         }
//     }

//     componentWillReceiveProps(nextProps) {
//         if (nextProps.orderbooks !== this.state.orderbooks) {

//             this.setState({
//                 orderbooks: nextProps.orderbooks
//             })
//         }
//     }

//     render() {
//         return (
//             <div id='UserOrder_Id' className="">
//                 <div className="ui five column grid">
//                     <div className="row">
//                         <div className="row">{this.state.orderbooks.map(book => (
//                             <BookCard
//                                 key={book.id}
//                                 book={book}
//                                 onBookClick={this.deleteBook} />
//                         ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

// };

// export default UserOrder;
