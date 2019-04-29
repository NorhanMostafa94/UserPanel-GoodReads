import axios from 'axios';

const BACKEND_URL = "https://goodreadsbackend.herokuapp.com" || 'http://localhost:3000';

export const getCategories = () => {
    return axios.get(`${BACKEND_URL}/api/categories`)
        .then(res => res.data)
}

export const getCategoryById = async (categoryId) => {
    const categories = await axios.get(`${BACKEND_URL}/api/categories/${categoryId}`)
    // const books = categories.data.books
    return categories.data;
}