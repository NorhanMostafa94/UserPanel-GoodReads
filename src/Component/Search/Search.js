import React, { Component }  from 'react';
import { withRouter} from 'react-router';
import {Context} from '../../App';



class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
      }
    state = { 
        search:'',
        book:[],
       lastSearch:[]
        
     }
    handleChange = (books, res,e)=> {
        const name = e.target.name;
        const value = e.target.value;
        
            if(value !== '') {
                // this.setState({ [name]: value }
                //    ,()=>{
                 this.setState({ search: value }
                , () => {
                   // lastSearch: choosedBook
                    console.log(this.state)
                    let choosedBook = books.filter(m => m.title.toLowerCase().includes(value.toLowerCase()))

                    if (choosedBook.length !== 0) {
                        this.setState({ book: choosedBook, search: value }, () => {
                            console.log(this.state)
                            res(this.state.book)
                            console.log(choosedBook, this.state.search)
                            this.props.history.push("/results")
                        });
                    }
                    else {
                        this.setState({ book: [], search: value, lastSearch: [] }, () => {
                            res(this.state.book)
                            console.log(choosedBook)
                            // (lastSearch.length!==0)?
                            this.props.history.push("/results")

                        })
                    }

                }

                 )
            
            }

            else {
                console.log(this.state.lastSearch) ;
                //let s=this.state.lastSearch
                    // (this.state.lastSearch.length ===0) ?
                    this.setState({ book: [], search: '' }, () => {
                        res([])
                        this.props.history.goBack();
                    })
                    // : this.setState({ book: this.state.lastSearch, search: '' }, () => {
                    //     this.props.history.push("/results")
                    // })
            }


     }

    render() { 
        return ( 
            <Context.Consumer>
            {
                value => (
                   <>
                   {/* <div>
                    <input type="Text" placeholder="search books" value={this.state.search} onChange={this.handleChange(value.state.books,value.SearchRes)} name="search"/>
                    </div> */}
                        <div className=" h-100">
                            <div className="d-flex justify-content-center h-100">
                                <div className="searchbar">
                                    <input className="search_input" type="Text" placeholder="search books" value={this.state.search} onChange={e=>this.handleChange(value.state.books,value.SearchRes,e)} name="search"/>
                                        <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                   
                   </> 
                )
            }
            </Context.Consumer>
         );
    }
}
 
export default withRouter (SearchBar);