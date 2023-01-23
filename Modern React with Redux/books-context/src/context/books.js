import { createContext, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

// this is now the provider that we want to share in the overall context.
function Provider({children}) {
    const [books,setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
      };

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {title: newTitle});

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {...book, ...response.data}
            }
            return book;
        });
        setBooks(updatedBooks);
    };

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title // this is title: title
        });
        const updatedBooks = [...books, response.data] // response from axios post request
        setBooks(updatedBooks); // renders via what was confirmed by the server. No need to do a GET request
    };

    const valueToShare = {
        books,
        deleteBookById, //expected onDelete previously
        editBookById, //expected onEdit previously
        createBook, //expected onCreate previously
        fetchBooks
    }; //this won't be in normal production environments

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

//exports the provider component
export { Provider };
export default BooksContext;