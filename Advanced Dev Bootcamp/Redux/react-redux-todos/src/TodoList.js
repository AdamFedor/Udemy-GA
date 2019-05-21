import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { AddTodo, RemoveTodo } from './actionCreators';

class TodoList extends Component {
    constructor (props) {
        super(props);
        // where you do method binding, must be here
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.state = {
            // introduce react state
            task: ""
        };
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.AddTodo(this.state.task)
        e.target.reset();
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    removeTodo(id) {
        this.props.RemoveTodo(id)
    }
    render () {
        let todos = this.props.todos.map((val, index) => (
            <Todo removeTodo={this.removeTodo.bind(this, val.id)} task={val.task} key={index} />
        ));
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor="task">Task</label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        onChange={this.handleChange}
                    />
                    <button>Add a Todo!</button>
                </form>
                <ul>{todos}</ul>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        todos: reduxState.todos // grabs the state which includes todos.
    }
}

export default connect(mapStateToProps, { AddTodo, RemoveTodo})(TodoList);