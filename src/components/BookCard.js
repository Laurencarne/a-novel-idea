// import React from "react";

// const BookCard = props => {
//     const { book } = props;
//     this.onBookClick = props.onBookClick;

//     let bookCategories;

//     switch (book.book_class) {
//         case "Fiction":
//             bookCategories = <i className="icon fiction" />;
//             break;
//         case "Music":
//             bookCategories = <i className="icon music" />;
//             break;
//         case "Biography":
//             bookCategories = <i className="icon biography" />;
//             break;
//         default:
//             bookCategories = <div />;
//     }

//     return (
//         <div
//             className="ui column"
//             onClick={(event) => props.onBookClick(book)}
//         >
//             <div
//                 className="ui card"
//                 key={book.id}
//             >
//                 <div className="content">

//                 </div>
//                 <div className="extra content">

//                 </div>
//             </div>
//         </div>
//     );

// };

// export default BookCard;
