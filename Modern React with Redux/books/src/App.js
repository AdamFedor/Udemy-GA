import {useState, useEffect} from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App (){
    const [books,setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data); //sets our state to the response of the server
    };

    useEffect (() => {
        fetchBooks();
    }, []);

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

    // event handler
    const CreateBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title // this is title: title
        });
        const updatedBooks = [...books, response.data] // response from axios post request
        setBooks(updatedBooks); // renders via what was confirmed by the server. No need to do a GET request
    };

    // reminder, onSubmit can be anything we want. Component just has to match it.
    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList onEdit={editBookById} books={books} onDelete={deleteBookById}/>
            <BookCreate onCreate={CreateBook}/>
        </div>
    );
}
export default App;
