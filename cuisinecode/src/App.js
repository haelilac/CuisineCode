import React, { useState } from 'react';
import './App.css';
import { recipes } from './components/RecipeData';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const handleSearch = () => {
    const searchTerm = searchInput.toLowerCase().trim();

    if (searchTerm === '' || searchTerm.length < 3) {
      // Clear filtered recipes if search term is empty or less than 3 characters
      setFilteredRecipes([]);
    } else {
      const matchingRecipes = recipes.filter((recipe) =>
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(searchTerm)
        )
      );
      setFilteredRecipes(matchingRecipes);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    if (inputValue.trim() === '') {
      setFilteredRecipes([]);
    }
  };

  return (
    <div className="App">
<<<<<<< Updated upstream
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
=======
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
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
