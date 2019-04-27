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
                                    <Dropdown.Item href="#/action-1">Currently Reading</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Read</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Want to Read</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <span>
                                <div className="rate-header">Rate this book</div>
                                <span className="book-details-stars ">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </span>
                            </span>
                        </div>
                        <div className="col-lg-7 col-sm-12 desc-block">
                            <h5 className="bookTitle">{this.state.book.title}</h5>

                            {
                                this.state.book.authorID || this.state.categoryID ? 
                                <>
                                <h6 style={{ display: 'block' }}><Link to={`/authors/${this.state.book.authorID._id}`} className="author-name" >
                                    by {this.state.book.authorID.name}</Link> </h6>
                                <Link to={`/categories/${this.state.book.categoryID}`} className="book-category">{this.state.book.categoryID}</Link>
                            </>
                            : console.log("err")
                            }
                            <span>
                                {<Rating rating={this.state.book.rating} />}
                                <span className="avgRate">{this.state.book.avgrating}</span>
                            </span>
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