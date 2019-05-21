import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import { Link, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1> See our To-do's!</h1>
      <p>
        <Link to='/todos'>See my todos!</Link>
      </p>
      <p>
        <Link to='/todos/new'>Add a new todos!</Link>
      </p>
      <Route path='/todos' component={TodoList} />
      <Route path='/' render={() => <Redirect to='/todos' />} />
      <TodoList />
    </div>
  );
}

export default App;
