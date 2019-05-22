import React, { Component } from 'react';

// stateless functional component
const Todo = ({task, removeTodo}) => (
    <li>
    {task}
    <button onClick={removeTodo}>X</button>
    </li>
)

export default Todo;
