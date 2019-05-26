export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const GET_TODOS = "GET_TODOS";

function handleTodos(task) {
    return {
        type: GET_TODO,
        data
    }
}
function handleAdd(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}

function handleRemove(id) {
    return {
        type: REMOVE_TODO,
        id
    }
}

// exporting via thunk an action creator via async action
export function getTodos() {
    // return function on dispatch
    return dispatch => {
        // ajax call
        return fetch('http://localhost:3001/api/todos')
        .then(res => res.json())
        .then(data => dispatch(handleTodos(data)))
        .catch(err => console.log('SOMETHING WENT WRONG!', err));
    };
}

export function addTodo(task){
    return dispatch => {
        return fetch('http://localhost:3001/api/todos', {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({task})
        })
        .then(res => res.json())
        .then(data => dispatch(handleAdd(data)))
        .catch(err => console.log("Error on Add", err))
    };
}

export function removeTodo(id){
    return dispatch => {
        return fetch(`http://localhost:3001/api/todos/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => dispatch(handleRemove(id)))
        .catch(err => console.log("Error on Remove", err))
    }
}