import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { AddTodo, RemoveTodo } from './actionCreators';
import { Route } from 'react-router-dom';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor (props) {
        super(props);
        // where you do method binding, must be here
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAdd(val) {
        this.props.addTodo(val);
    }
    removeTodo(id) {
        this.props.RemoveTodo(id)
    }
    render () {
        let todos = this.props.todos.map((val, index) => (
            <Todo
                removeTodo={this.removeTodo.bind(this, val.id)}
                task={val.task}
                key={index} />
        ));
        return (
            <div>
                <Route path='/todos/new' component={props => (
                    <NewTodoForm {...props} handleSubmit={this.handleAdd} />
                )} />
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

export default connect(mapStateToProps, { AddTodo, RemoveTodo})(TodoList);