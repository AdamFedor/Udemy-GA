import {useState} from 'react';

function BookCreate({onCreate}) {
    // submit via enter key or submit button
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        // What the user just typed
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        // prevent reloading the page, submit string
        event.preventDefault();
        onCreate(title);
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