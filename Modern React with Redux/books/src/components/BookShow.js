import {useState} from 'react';
import BookEdit from './BookEdit';

function BookShow({book, onDelete, onEdit}) {
    const [showEdit, setShowEdit] = useState(false);
    
    // handleDeleteClick prevents the immediate delete and instead finds the id of what to delete
    const handleDeleteClick =() => {
        onDelete(book.id);
    };
    
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit =(id, newTitle) => {
        setShowEdit(false);
        // calling this event, nesting it together. So only one is called in BookEdit.
        // this called will run onEdit for the prop that is passed into BookShow
        onEdit(id, newTitle);
    }

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        // passing the book title so it can be used in edit
        content = <BookEdit onSubmit={handleSubmit} book={book}/>;
    }

    //adding the id in the url forces the browser to accept a unique image from the same url
    return (
    <div className="book-show">
        <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`}></img>
        <div>{content}</div>
        <div className="action">
            <button className="edit" onClick={(handleEditClick)}>
                Edit
            </button>
            <button className="delete" onClick={handleDeleteClick}>
                Delete
            </button>
        </div>
    </div>
    )
}
export default BookShow;