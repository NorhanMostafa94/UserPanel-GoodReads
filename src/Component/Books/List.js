import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import Book from "./BookItem";
import Paging from "../shared/Pagination";
import NavBar from "../shared/Navbar";

import {getBooks} from './../../API/book';

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books:[]
    }
  }
  componentDidMount(){
    getBooks()
    .then(res=>this.setState({books:res}))
  }
  render() {
    return (
      <>
        <NavBar />
        <Container className="card-container">
          <Row className="justify-content-md-center">
            {this.state.books.map(d => (
              <Book key={d.id} {...d} />
            ))}
          </Row>
          <Paging />
        </Container>
      </>
    );
  }
}

export default BooksList;
