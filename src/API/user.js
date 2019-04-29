import axios from 'axios';
const BACKEND_URL = "https://goodreadsbackend.herokuapp.com" || 'http://localhost:3000';

export const register = ({ firstname, lastname, email, password }) => {
    // debugger;
    return axios.post(`${BACKEND_URL}/api/users`, {

        firstname, lastname, email, password
    })
        .then(res => res.data)
    // debugger;
}
const id = 0;

export const login = ({ firstname, password }) => {
    //debugger
    return axios.post(`${BACKEND_URL}/api/users/login`, {

        firstname, password

    })
        .then(res => {
            //   debugger
            console.log(res.data.profile._id)
            // debugger
            return res.data

        })
}

export const getUserBooks =async () => {
    const books=await axios.get(`${BACKEND_URL}/api/usersbooks/${id}`)
        return  books.data
}

export const getProfile = () => {
    return axios.get(`${BACKEND_URL}/api/users/profile`, {

        headers: {
            authorization: `Bearer ${localStorage.getItem("usertoken")}`
        }
    }).then(res => {
        return res.data

    })
}


