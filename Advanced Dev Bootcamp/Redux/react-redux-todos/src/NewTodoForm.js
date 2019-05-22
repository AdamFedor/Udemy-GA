import React, { Component } from 'react';

export default class NewTodoForm extends Component {
    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            // introduce react state
            task: ""
        };
    }
    handleSubmit(e) {
        e.preventDefault();
        // this.props.AddTodo(this.state.task) // no longer want to connect to AddTodo, but want the TodoList to connect to Redux
        this.props.handleSubmit(this.state.task);
        e.target.reset();
        this.props.history.push('/todos') // from react-router, this comes from {...props}
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
            <label htmlFor="task">Task</label>
            <input type="text" name="task" id="task" onChange={this.handleChange} />
            <button>Add a Todo!</button>
        </form>
        );
    }
}