import { ADD_TODO, REMOVE_TODO, GET_TODOS } from './actionCreators';

const initialState = {
    todos: [],
    // id: 0 // Mongoose will take care of IDs
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TODOS:
            return{...state, todos: action.data};
        case ADD_TODO:
        //     var newState ={ ...state };
        //     newState.id++
        //     return {
        //         ...newState,
        //     todos: [...newState.todos, { task: action.task, id: newState.id }]
        // };
            return {...state, todos: [...state.todos, action.todos]};
        case REMOVE_TODO:
            let todos = state.todos.filter(val => val.id !== action.id);
            return { ...state, todos };
        default:
            return state;
    }
}