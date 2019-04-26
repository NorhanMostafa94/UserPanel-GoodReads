import React, { Component } from "react";
import { Context } from "../../App";
import { Container, Row } from "react-bootstrap";

import Author from "./Author";
import Paging from "../shared/Pagination";
import NavBar from "../shared/Navbar";

// import Book from '../Books/BookItem'
class AuthorsList extends Component {
  render() {
    return (
      <Context.Consumer>
        {value => (
          <>
            <NavBar />
            {/* // this.get(value.getCategories) */}
            <Container className="card-container">
              <Row className="justify-content-md-center authors-list">
                {value.state.authors.map(
                  d => (
                    <Author key={d.id} {...d} />
                  )
                  // <Book key={d.id} {...d}></Book>
                )}
              </Row>
              <Paging />
            </Container>
          </>
        )}
      </Context.Consumer>
    );
  }
}

export default AuthorsList;
