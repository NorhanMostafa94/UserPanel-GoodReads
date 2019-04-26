import axios from 'axios';
const BACKEND_URL = 'http://localhost:3000';

export const getAuthors = () => {
    return axios.get(`${BACKEND_URL}/api/authors`)
        .then(res => res.data)
}

export const getAuthorById = (authorId)=>{
    return axios.get(`${BACKEND_URL}/api/authors/`,{
        params:{
            authorId: authorId
        }
    })
    .then(res => res.data)
}