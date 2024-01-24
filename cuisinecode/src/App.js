import React, { useState, useEffect } from 'react';
import './App.css';
import { recipes } from './components/RecipeData';
import RecipeModal from './components/RecipeModal';
import RandomRecipe from './components/RandomRecipe';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [randomIndex, setRandomIndex] = useState(null);

  useEffect(() => {
    // Generate a random index only on initial page load
    if (randomIndex === null) {
      const newRandomIndex = Math.floor(Math.random() * recipes.length);
      setRandomIndex(newRandomIndex);
    }
  }, [randomIndex]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    // Filter recipes based on the search input
    const matchingRecipes = recipes.filter((recipe) =>
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
    setFilteredRecipes(matchingRecipes);
  };

  const openRecipeModal = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeRecipeModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="header-text">
          <h1>Cuisine Code</h1>
          <p>Ingredient-based Filipino recipe search</p>
        </div>
      </div>
      <div className="content">
        <div className="left-container">
          <div className="Random-Recipe-container">
            <RandomRecipe randomIndex={randomIndex} setRandomIndex={setRandomIndex} />
          </div>
        </div>
        <div className="right-container">
          <div className="search-container">
            <input
              type="text"
              placeholder="Enter ingredients..."
              value={searchInput}
              onChange={handleInputChange}
            />
            {/* No need for a separate search button */}
          </div>
          <div className="recipes-container">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
                <div key={recipe.id} className="recipe" onClick={() => openRecipeModal(recipe)}>
                  <img src={recipe.image} alt={recipe.name} />
                  <p>{recipe.name}</p>
                </div>
              ))
            ) : (
              // Render all recipes if no search input
              recipes.map((recipe) => (
                <div key={recipe.id} className="recipe" onClick={() => openRecipeModal(recipe)}>
                  <img src={recipe.image} alt={recipe.name} />
                  <p>{recipe.name}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      {selectedRecipe && <RecipeModal recipe={selectedRecipe} onClose={closeRecipeModal} />}
    </div>
  );
}

export default App;
