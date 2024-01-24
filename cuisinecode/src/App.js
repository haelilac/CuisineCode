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
  const [scrollingUp, setScrollingUp] = useState(false);

  useEffect(() => {
    if (randomIndex === null) {
      const newRandomIndex = Math.floor(Math.random() * recipes.length);
      setRandomIndex(newRandomIndex);
    }

    // scrolling
    const handleScroll = () => {
      setScrollingUp(window.scrollY < window.scrollYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [randomIndex]);

  const handleSearch = () => {
    const searchTerm = searchInput.toLowerCase().trim();

    if (searchTerm === '' || searchTerm.length <= 0) {
      // Clear filtered recipes if search term is empty
      setFilteredRecipes([]);
    } else {
      const searchIngredients = searchTerm.split(',').map((ingredient) => ingredient.trim());

      if (searchIngredients.length > 0) {
        const matchingRecipes = recipes.filter((recipe) =>
          searchIngredients.every((searchIngredient) =>
            recipe.ingredients.some((ingredient) =>
              ingredient.toLowerCase().includes(searchIngredient)
            )
          )
        );
        setFilteredRecipes(matchingRecipes);
      } else {
        // Clear filtered recipes if no valid search ingredients
        setFilteredRecipes([]);
      }
    }
  };
  

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    if (inputValue.trim() === '') {
      setFilteredRecipes([]);
      setSelectedRecipe(null);
    } else {
      handleSearch();
    }
  };

  const openRecipeModal = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeRecipeModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="body" style={{ backgroundImage: `url(/Assets/mainbg.jpg)` }}>
    <div className={`app-container ${scrollingUp ? 'scrolling-up' : ''}`}>
      <div className="header" style={{ backgroundImage: `url(/Assets/headerbg.jpg)` }}>
        <div className="header-text">
          <h1>Cuisine Code</h1>
          <p>Discover the Art of Filipino Cuisine</p>
        </div>
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
            <button onClick={handleSearch}>
              <span className="material-icons-outlined">search</span>
            </button>
          </div>
          <div className="recipes-container">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
                <div key={recipe.id} className="recipe" onClick={() => openRecipeModal(recipe)}>
                  <img src={recipe.image} alt={recipe.name} />
                  <p className="recipe-rname">{recipe.name}</p>
                </div>
              ))
            ) : (
              <div className="no-recipes">
                <p>No matching recipes found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {selectedRecipe && <RecipeModal recipe={selectedRecipe} onClose={closeRecipeModal} />}
    </div>
  );
}

export default App;