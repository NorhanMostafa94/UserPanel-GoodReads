import axios from 'axios';
const BACKEND_URL = 'http://localhost:3000';

export const register = ({ firstname, lastname, email, password }) => {
    // debugger;
    return axios.post(`${BACKEND_URL}/api/users`, {

        firstname, lastname, email, password
    })
        .then(res => res.data)
    // debugger;
}

export const login =  ({ firstname, password }) => {
    //debugger
    return  axios.post(`${BACKEND_URL}/api/users/login`, {

        firstname, password

    })
        .then(res => {
         //   debugger
            console.log(res)
           // debugger
            return res.data
            
        })
    debugger;
}



