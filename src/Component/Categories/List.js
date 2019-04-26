import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import NavBar from '../shared/Navbar'

import {getCategories} from './../../API/category';

class CategoriesList extends Component {
    constructor(props){
        super(props);
        this.state = {
          categories:[]
        }
      }
      componentDidMount(){
        getCategories()
        .then(res=>{
          this.setState({categories:res})
        //   console.log(this.state.categories._id)
        })
        .catch(err=> console.log(err))
        
      }
    render() {
        return (

            <>
                <NavBar />
                <div className="cat-header" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/f7/70/4e/f7704e0755bcad2a4e9f308a8c74c31a.jpg)' }}>
                    <Container className="card-container" >
                        <Row className="justify-content-md-center" style={{ marginTop: '200px' }}>

                            {this.state.categories.map(d =>
                                <Link className="cat-btn" to={`/categories/${d._id}`} key={d._id}>
                                    <div>{d.name}</div>
                                </Link>)}
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}

export default CategoriesList;