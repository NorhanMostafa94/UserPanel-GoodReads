import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Rating from './Rating';
import Reviews from './Reviews'
import { Link } from 'react-router-dom'
import { getBookById } from '../../API/book'
import NavBar from '../shared/Navbar'

class BookDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // books: books,
            book: {}
        }
    }

    componentDidMount() {
        const ID = this.props.match.params.id;
        console.log(ID)
        getBookById(ID)
            .then(b => {
                this.setState({ book: b });
                console.log(this.state.book)
            })
            .catch(err => {
                console.log(err)
            })

    }


    render() {
        return (
            <>
                <NavBar />
                <div className="container book-details-block">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12">
                            <img src={this.state.book.cover} className="book-img" alt={this.state.book.cover}></img>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className="book-details-dropdwn drobDWON">
                                    Want to Read
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>Currently Reading</Dropdown.Item>
                                    <Dropdown.Item>Read</Dropdown.Item>
                                    <Dropdown.Item>Want to Read</Dropdown.Item>
                                </Dropdown.Menu>
                                {/* onClick={this.updateShelve("currently reading")} */}
                                {/* onClick={this.updateShelve("read")} */}
                                {/* onClick={this.updateShelve("want to read")} */}
                            </Dropdown>
                            <span>
                                <div className="rate-header">Rate this book</div>
                                <span className="book-details-stars ">
                                    <span>
                                        {<Rating rating={this.state.book.rating} />}
                                    </span>
                                    {/* <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i> */}
                                </span>

                            </span>
                        </div>
                        <div className="col-lg-7 col-sm-12 desc-block">
                            <h5 className="bookTitle">{this.state.book.title}</h5>

                            {
                                this.state.book.authorID ?
                                <>
                                        <h6 style={{ display: 'block' }}><Link to={`/authors/${this.state.book.authorID._id}`} className="author-name" >
                                            by {this.state.book.authorID.name}</Link> </h6>
                                    </>
                                    : console.log("err")
                                }
                            {
                                this.state.book.categoryID ?
                                <>
                                        <Link to={`/categories/${this.state.book.categoryID._id}`} className="book-category">{this.state.book.categoryID.name}</Link>
                                    </>
                                    : ''
                                }
                            <span className="book-details-stars ">
                                    {/* <span>
                                        {<Rating rating={this.state.book.rating} />}
                                        <span className="avgRate">{this.state.book.avgrating}</span>
                                    </span> */}
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </span>
                                    <span className="avgRate">{this.state.book.avgrating}</span>
                            <p className="bio">
                                {this.state.book.description}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h4 className="reviews-header">COMMUNITY REVIEWS</h4>
                            {<Reviews reviews={this.state.book.reviews} />}

                        </div>
                    </div>
                </div>


            </>
        )
    }
}
export default BookDetails;