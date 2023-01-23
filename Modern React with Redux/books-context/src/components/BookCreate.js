import {useState} from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookCreate() {
    // submit via enter key or submit button
    const [title, setTitle] = useState('');
    const {createBook} = useBooksContext();

    const handleChange = (event) => {
        // What the user just typed
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        // prevent reloading the page, submit string
        event.preventDefault();
        createBook(title); //used to be onCreate via props
        setTitle('');
    }

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button">Create!</button>
            </form>
        </div>
    )
}
export default BookCreate;