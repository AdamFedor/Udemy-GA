import {useState} from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title);
    const {editBookById} = useBooksContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(); //still need to show bookShow when to close the form, but doesn't need ID and title
        editBookById(book.id, title);
    };

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button is-primary">Save</button>
        </form>
    )
}
export default BookEdit;