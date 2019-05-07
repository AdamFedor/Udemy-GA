import React from 'react';
import logo from './logo.svg';
import './RecipeApp.css';
import Recipe from './Recipe';

function RecipeApp() {
  return (
    <div className="App">
      <Recipe title="pasta" ingredients={['flour', 'water']}/>
    </div>
  );
}

export default RecipeApp;