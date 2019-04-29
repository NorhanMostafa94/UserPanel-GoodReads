import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import Author from "./Author";
import Paging from "../shared/Pagination";
import NavBar from "../shared/Navbar";

import {getAuthors} from './../../API/author';

// import Book from '../Books/BookItem'
class AuthorsList extends Component {
  constructor(props){
    super(props);
    this.state = {
      authors:[]
    }
  }
  componentDidMount(){
    getAuthors()
    .then(res=>{
      this.setState({authors:res})
    })
    .catch(err=> console.log(err))
    
  }
  render() {
    return (
          <>
            <NavBar />
            <Container className="card-container">
              <Row className="justify-content-md-center authors-list">
                {this.state.authors.map(
                  d => (
                    <Author key={d._id} {...d} />
                  )
                  // <Book key={d.id} {...d}></Book>
                )}
              </Row>
              
            </Container>
          </>
    );
  }
}

export default AuthorsList;
