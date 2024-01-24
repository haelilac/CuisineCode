import React, { useState } from 'react';
import './App.css';
import { recipes } from './components/RecipeData';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const handleSearch = () => {
    const searchTerm = searchInput.toLowerCase().trim();
  
    if (searchTerm === '' || searchTerm.length < 3) {
      setFilteredRecipes([]);
    } else {
      const matchingRecipes = recipes.filter((recipe) =>
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase() === searchTerm
        )
      );
  
      // Check if there is an exact match for the search term
      if (matchingRecipes.length > 0) {
        setFilteredRecipes(matchingRecipes);
      } else {
        setFilteredRecipes([]);
      }
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    // Update filtered recipes based on input change
    if (inputValue.trim() === '') {
      setFilteredRecipes([]);
    } else {
      const matchingRecipes = recipes.filter((recipe) =>
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
      setFilteredRecipes(matchingRecipes);
    }
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
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter ingredient..."
            value={searchInput}
            onChange={handleInputChange}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="recipes-container">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <div key={recipe.id} className="recipe">
                <img src={recipe.image} alt={recipe.name} />
                <p>{recipe.name}</p>
              </div>
            ))
          ) : (
            <p>No matching recipes found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
