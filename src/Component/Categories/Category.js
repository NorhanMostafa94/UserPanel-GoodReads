import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import Book from '../Books/BookItem'
import Paging from '../shared/Pagination';


import { getCategoryById } from './../../API/category';

class CategoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: {}
        }
    }

    componentDidMount() {
        getCategoryById(this.props.match.params.id)
        .then(res=>{

            this.setState({ category: res });
        })

    }
    render() {
        return (
            // this.state.category.filter(e => e._id === Number(id)).map(t =>
            <div key={this.state.category._id}>
                <div className="cat-header">
                    <h1 className="cat-header-text">{this.state.category.name}</h1>
                </div>
                <Container className="card-container" >
                    {/* <Row className="justify-content-md-center"> */}
                        {this.state.category.books ? this.state.category.books.map(c => <Book key={c._id} {...c}></Book>) : console.log("error")}
                        {console.log(this.state.category.books)}
                    {/* </Row> */}
                    <Paging />
                </Container>
            </div>
            // )
        )

    }
}

export default CategoryItem;