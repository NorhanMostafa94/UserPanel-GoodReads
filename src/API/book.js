import axios from 'axios';

const BACKEND_URL ="https://goodreadsbackend.herokuapp.com"|| 'http://localhost:3000';

export const getBooks = () => {
    return axios.get(`${BACKEND_URL}/api/books`)
        .then(res => res.data)
}


export const getBookById = async (bookId)=>{
    const book = await axios.get(`${BACKEND_URL}/api/books/${bookId}`)
    return book.data;
}