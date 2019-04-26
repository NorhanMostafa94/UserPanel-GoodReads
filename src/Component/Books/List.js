import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import { Context } from "../../App";
import Book from "./BookItem";
import Paging from "../shared/Pagination";
import NavBar from "../shared/Navbar";

class BooksList extends Component {
  render() {
    return (
      <Context.Consumer>
        {value => (
          <>
            <NavBar />
            <Container className="card-container">
              <Row className="justify-content-md-center">
                {value.state.books.map(d => (
                  <Book key={d.id} {...d} />
                ))}
              </Row>
              <Paging />
            </Container>
          </>
        )}
      </Context.Consumer>
    );
  }
}

export default BooksList;
