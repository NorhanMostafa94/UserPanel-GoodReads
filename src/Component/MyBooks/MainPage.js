import React, { Component } from 'react';
import Listing from './Listing'
import { AllBooks } from '../../data'
import { getUserBooks,getCurrentlyReadingBooks,getWantToReadBooks,getReadBooks } from '../../API/userBooks'

import NavBar from '../shared/Navbar'

class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // books: AllBooks,
            // data: AllBooks
            books: [],
            data: [],
            ID:0
        }
    }
    componentDidMount() {
        const ID = "5cc4312ece268b3ab8ec5419";
        this.setState({ID})
        // const ID = this.props.match.params.id;
        getUserBooks(ID)
            .then(res => {
                this.setState({
                    books: res,
                    data: res
                });
            })
            .catch(err => console.log(err))
    }

    handleClick = (event) => {
         const ID = "5cc4312ece268b3ab8ec5419";
        event.preventDefault();
        const name = event.target.name;
        // console.log(name)

        if (name === 'all') {
            getUserBooks(ID)    
                .then(res => {
                    this.setState({ books: this.state.data });
                })
                .catch(err => console.log(err))
        }
        else if(name==='currentlyreading') {
            getCurrentlyReadingBooks(ID,name)
            .then(res => {
                this.setState({ books: res });
                console.log(this.state.books)
            })
            .catch(err => console.log(err))

        }
        else if(name==='wantToRead') {
            getWantToReadBooks(ID,name)
            .then(res => {
                this.setState({ books: res });
                console.log(this.state.books)
            })
            .catch(err => console.log(err))

        }
        else {
            getReadBooks(ID,name)
            .then(res => {
                this.setState({ books: res });
                console.log(this.state.books)
            })
            .catch(err => console.log(err))
        }

    }
    render() {
        return (
            <>
                <NavBar />

                <div className="container">
                    <div className="row books-header">
                        <div className="col-6">
                            <h3 className="books_title-header">My Books</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 bookshelves">
                            <h6 className="bookshelves-title">Bookshelves </h6>
                            <button onClick={this.handleClick} name="all" className="books-link">All</button>
                            <br />
                            <button onClick={this.handleClick} name="read" className="books-link">Read</button>
                            <br />
                            <button onClick={this.handleClick} name="currentlyreading" className="books-link">Currently Reading</button>
                            <br />
                            <button onClick={this.handleClick} name="wantToRead" className="books-link">Want to read</button>
                        </div>
                        <div className="col-9 listing">
                            {<Listing books={this.state.books} ID={this.state.ID}></Listing>}
                        </div>
                    </div>
                </div>
            </>

        )
    }
}
export default MainPage;