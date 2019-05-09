import React from 'react';
import './RecipeApp.css';
import Recipe from './Recipe';
import Navbar from './navbar';
import RecipeList from './RecipeList';

function RecipeApp() {
  return (
    <div className="App">
      <Navbar />
      <RecipeList />
    </div>
  );
}

export default RecipeApp;