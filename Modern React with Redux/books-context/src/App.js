import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App (){
    const {fetchBooks} = useContext(BooksContext); //gives us the object we're sharing, using only fetchBooks from it

    useEffect (() => {
        fetchBooks(); // we'll have to use context for this
    }, []);

    // BookList & BookCreate no longer receive props passed down, instead via
    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
      );
    }
export default App;
