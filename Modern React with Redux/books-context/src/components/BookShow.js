import {useState} from 'react';
import useBooksContext from '../hooks/use-books-context';
import BookEdit from './BookEdit';

function BookShow({book}) {
    const [showEdit, setShowEdit] = useState(false);
    const {deleteBookById } = useBooksContext();
    
    // handleDeleteClick prevents the immediate delete and instead finds the id of what to delete
    const handleDeleteClick =() => {
        deleteBookById(book.id); //used to be onDelete prop, now via constext
    };
    
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit =() => {
        setShowEdit(false); //no longer calling onEdit since it's in the edit component
    }

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        // passing the book title so it can use the title via props
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