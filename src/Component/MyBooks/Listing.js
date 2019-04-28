import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Paging from '../shared/Pagination';
import Rating from '../Books/Rating';
import { Link } from 'react-router-dom'
const Listing = (props) => {


    const displayBooks = ({ books,ID }) => {
        console.log(books)
        // console.log(ID)
        if ({ books }) {
            return books.map((book) => {
                if(book.book){
                    console.log(book.book._id)
                return (

                    <tr key={book._id} >
                        <td><img src={book.book.cover} alt="" className="image-listing" /></td>
                        {/* <td>{book.title}</td> */}
                        <td>
                            <Link to={`/books/${book.book._id}`} className="myBook-bokTitle" >{book.book.title}</Link>
                        </td>
                        {/* <td>{book.author}</td> */}
                        <td>
                            <Link to={`/authors/${book.book.authorID}`} className="myBook-bokTitle">{book.book.authorID.name}</Link>
                        </td>
                        <td className="myBook-bokTitle">{book.book.avgrating}</td>
                        <td>
                            {/* {rating(book.rating)} */}
                            {<Rating key={book._id} rating={book.rating} ID={ID} bookId={book.book._id} />}
                        </td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className="drobDWON">
                                   {book.shelve}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Currently Reading</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Read</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Want to Read</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>



                    )
                }
            })
        }
    }
    return (
        <>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th className="table_header">cover</th>
                        <th className="table_header table__title">title</th>
                        <th className="table_header">author</th>
                        <th className="table_header">avg rating</th>
                        <th className="table_header">rating</th>
                        <th className="table_header">shelves</th>
                    </tr>
                </thead>
                <tbody>
                    {displayBooks(props)}
                </tbody>
            </Table>
            <Paging />
        </>
    )
}
export default Listing;
