import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

class Rating extends Component {
    constructor(props) {
        super(props)
        this.state={
            s:0,
            e:0
        }
    }
    ratting = ({ rating }) => {
        let stars = [];
        for (let index = 1; index <= rating; index++) {
            stars.push(<i className="fas fa-star rating" key={uuidv4()} onMouseOver={this.onHover(index)}></i>)
            this.state.s=index+1;
        }
        for (let i = this.state.s; i <=5 ; i++) {
            stars.push(<i class="far fa-star" key={uuidv4()} onMouseOver={this.onHover(i)} onClick={this.starClick(i)}></i>)
            this.state.e=rating;        
            // console.log(this.state.s)
        }
        // this.starClick()
        return stars
    }
    onHover = (i) => () => {
        // alert('hi')
        // console.log(i)
    }
    starClick = (i) =>()=>{
        this.setState({e:this.state.e})
        
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