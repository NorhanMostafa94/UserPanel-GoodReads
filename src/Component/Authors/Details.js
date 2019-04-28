import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
//  import BookAuthor from '../Authors/Books'
import { Link } from 'react-router-dom'
import Book from '../Books/BookItem'
import { Row, Col } from "react-bootstrap";
import { getAuthorById } from '../../API/author';
import NavBar from "../shared/Navbar";

class AuthorDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // authors: authors,
      author: {}
    };
  }

  componentDidMount() {
    const ID = this.props.match.params.id;
    // const targetAuthor = await getAuthorById(ID)
    // this.setState({ author:targetAuthor });
    // console.log(ID);


    getAuthorById(ID)
      .then(auth => {

        this.setState({ author: auth });

        console.log(this.state.author)
      })
      .catch(err => console.log(err))

  }

  render() {
    return (
      <>
        {console.log(this.state.author.books)}
        {console.log(this.state.author)}
        <NavBar />
        <div className="container book-details-block">
          <div className="row">
            <div className="col-lg-3 col-sm-12">
              <img
                src={this.state.author.cover}
                className="book-img"
                alt={this.state.author.cover}

              />
            </div>
            <div className="col-lg-7 col-sm-12 desc-block">
              <h6 className="bookTitle">{this.state.author.name}</h6>
              <p>
                <span className="title">Born:</span>
                <span className="author-bio title">
                  {this.state.author.BD}
                </span>
              </p>
              <p>
                <span className="title">Website:</span>
                <Link to="#" className="author-web title">
                  {this.state.author.website}
                </Link>
              </p>
              {
                this.state.author.genre ?
                  <>
                  
                    <span className="title">Genre:</span>
                    <span className="author-bio title">
                      {this.state.author.genre.name}
                    </span>
                  </>
                  : console.log("err")
              }

              <p className="bio">{this.state.author.bio}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Row className="justify-content-md-center">
                {this.state.author.books === undefined
                  ? ""
                  : this.state.author.books.map(b => (
                    <Book key={b._id} {...b} />
                  ))}
              </Row>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default AuthorDetails;
