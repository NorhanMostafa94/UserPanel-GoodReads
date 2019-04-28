import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Paging from '../shared/Pagination';
import Rating from '../Books/Rating';
import { Link } from 'react-router-dom'
const Listing = (props) => {


    const displayBooks = ({ books }) => {
        console.log(books)
        if ({ books }) {
            return books.map((book) => {
                if (book.book ) {
                    console.log(book.book)
                    console.log(book.book.authorID)
                   

                    return (

                        <tr key={book._id} >
                            <td><img src={book.book.cover} alt="" className="image-listing" /></td>
                            <td>
                                <Link to={`/books/${book.book._id}`} className="myBook-bokTitle" >{book.book.title}</Link>
                            </td>
                            {
                                book.book.authorID ?
                                    <>
                                        <td>
                                            <Link to={`/authors/${book.book.authorID._id}`} className="myBook-bokTitle">{book.book.authorID.name}</Link>
                                        </td>
                                    </>
                                    : console.log("err")
                            }

                            <td className="myBook-bokTitle">{book.book.avgrating}</td>
                            <td>
                                {<Rating key={book._id} rating={book.rating} />}
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
