import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { AddTodo, RemoveTodo, getTodos } from './actionCreators'; // these are all thunks
import { Route } from 'react-router-dom';

class TodoList extends Component {
    constructor (props) {
        super(props);
        // where you do method binding, must be here
        this.handleAdd = this.handleAdd.bind(this);
    }
    componentDidMount() {
        this.props.getTodos(); // goes to action creator, run todos, ajax req, then dispatch(handle..)
    }
    handleAdd(val) {
        this.props.addTodo(val);
    }
    removeTodo(id) {
        this.props.RemoveTodo(id)
    }
    render () {
        let todos = this.props.todos.map((val) => (
            <Todo
                removeTodo={this.removeTodo.bind(this, val._id)}
                task={val.task}
                key={val._id}
            />
        ));
        return (
            <div>
                <Route
                    path='/todos/new'
                    component={props => (
                        <NewTodoForm {...props} handleSubmit={this.handleAdd} />
                    )}
                />
            <Route exact path='/todos' component={() => <div>{todos}</div>} />
            </div>
        );
    }
}

function mapStateToProps(reduxState) {
    return {
        todos: reduxState.todos // grabs the state which includes todos.
    }
}

export default connect(mapStateToProps, { AddTodo, RemoveTodo, getTodos })(TodoList);