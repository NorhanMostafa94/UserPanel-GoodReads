import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';


import {updateRating} from './../../API/userBooks';
class Rating extends Component {
    constructor(props) {
        super(props)
        this.state={
            s:0,
            e:0,
            r:props.rating,
            ID:props.ID,
            bookId:props.bookId
        }
    }
    // componentDidMount(){
    //     updateRating(this.state.ID,this.state.r)
    //     .then(res => {
    //         console.log(res.data)
    //     })
    //     .catch(err => console.log(err))
    // }
    ratting = ({ rating }) => {
        let stars = [];
        let o =0;
        // this.setState({r:rating})
        for (let index = 1; index <= this.state.r; index++) {
            stars.push(<i className="fas fa-star rating" key={uuidv4()} ></i>)
            o=index;
            // console.log(index)
        }
        for (let i = o; i <=5 ; i++) {
            stars.push(<i className="far fa-star" key={uuidv4()}  onClick={this.starClick(i)}></i>)
            // this.state.e=i;        
            // console.log(this.state.e)
            console.log(i)
        }
        // this.starClick()
        return stars
    }
    
    starClick = (i) =>()=>{
        this.setState({e:i,r:i})
        // console.log(this.state.book)
            // console.log(this.state.r)
            updateRating(this.state.ID,this.state.bookId,i+1)
                .then(res => {
                    console.log(res)
                })
                .catch(err => console.log(err))
    }
    render() {
        return (
            <>
                {this.ratting(this.props)}
            </>
        )

    }
}
export default Rating