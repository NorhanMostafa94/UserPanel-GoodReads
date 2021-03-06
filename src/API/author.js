import axios from 'axios';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';

export const getAuthors = () => {
    return axios.get(`${BACKEND_URL}/api/authors`)
        .then(res => res.data)
}

export const getAuthorById = async (authorId) => {
    const author = await axios.get(`${BACKEND_URL}/api/authors/${authorId}`)
    // const books = author.data.books;
    return author.data;
}