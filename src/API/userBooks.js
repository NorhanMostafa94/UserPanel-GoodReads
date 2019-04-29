import axios from 'axios';
import { async } from 'q';

const BACKEND_URL = "https://goodreadsbackend.herokuapp.com" || 'http://localhost:3000';

export const getUserBooks =async (userId) => {

    const books=await axios.get(`${BACKEND_URL}/api/usersbooks/${userId}`)
        return  books.data
}

export const getCurrentlyReadingBooks = async(userId,currReading) => {

const userbooks = await axios.get(`${BACKEND_URL}/api/usersbooks/${currReading}/${userId}`)
    return userbooks.data;

}

export const getWantToReadBooks = async (userId,wantToRead) => {

    const userbooks = await axios.get(`${BACKEND_URL}/api/usersbooks/${wantToRead}/${userId}`)
    return userbooks.data;
}
export const getReadBooks = async (userId,readBook) => {

const userbooks = await axios.get(`${BACKEND_URL}/api/usersbooks/${readBook}/${userId}`)
    return userbooks.data;

}

export const updateBookShelve = async (userId,bookId,shelve) => {

    const userbooks = await axios.patch(`${BACKEND_URL}/api/usersbooks/${userId}/${bookId}/${shelve}`)
        return userbooks.data;
    
    }

export const updateRating = async (userId,bookId,rating) =>{
    const userBookRate = await axios.patch(`${BACKEND_URL}/api/usersbooks/rating/${userId}/${bookId}/${rating}`)
    return userBookRate.data;
}

